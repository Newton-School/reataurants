import './App.css';
import useFetchRes from './useFetchRes'

function App() {
  const {restaurants,loading} = useFetchRes()
  console.log(restaurants,loading)
 
  return (
    <div className="App">
      hello res
      {loading?(<p>loading...</p>):(<p>{restaurants.nearby_restaurants.map(res=>(<p>{res.restaurant.location.address}</p>))}</p>)}
      
      {/* {restaurants.nearby_restaurants.map(res=>(<p>{res.restaurant.location.address}</p>))} */}
    </div>
  );
}

export default App;
