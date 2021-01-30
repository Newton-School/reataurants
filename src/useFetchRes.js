import { useReducer, useEffect } from 'react'
import axios from 'axios'

// https://cors-anywhere.herokuapp.com/
const BASE_URL = 'https://developers.zomato.com/api/v2.1/geocode'

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get_data',
    ERROR: 'error'
}

function reducer(state, action){
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return {loading: true, restaurants: []}
        
        case ACTIONS.GET_DATA:
            return {...state, loading: false, restaurants: action.payload.restaurants}

        case ACTIONS.ERROR:
            return {...state, loading: false, error: action.payload.error, restaurants: []}
    
        default:
            return state
    }
}

export default function useFetchRes(params){
    const [state, dispatch] = useReducer(reducer, {restaurants: [], loading:true})

    useEffect(() => {

        const cancelToken = axios.CancelToken.source()
        dispatch({
            type: ACTIONS.MAKE_REQUEST
        })
        axios.get(BASE_URL,{
            cancelToken: cancelToken.token,
            params: {lat:40.732013,lon:-73.996155},
            headers: {
                Accept: "application/json",
                "User-Key": "12bc09e5b12689345f110bb8f2d76b3c"
            }
        }).then(res=>{
            dispatch({
                type: ACTIONS.GET_DATA,
                payload: {restaurants: res.data}
            })
        }).catch(e => {
            if (axios.isCancel(e)) return
            dispatch({
                type: ACTIONS.ERROR,
                payload: {error: e}
            })
        })

        return () => {
            cancelToken.cancel()
        }
        
    }, [params])

    return state
}