// const zomatoApiBase = 'https://developers.zomato.com/api/v2.1/'

// export const fetchData = async (count) => {
//     const response = await fetch(`${zomatoApiBase}geocode?lat=40.732013&lon=-73.996155`, {
//         headers: {
//             Accept: "application/json",
//             "User-Key": "12bc09e5b12689345f110bb8f2d76b3c"
//         }
//     });
//     const data = await response.json();
//     return data;
// }

// useEffect(() => {
//     setIsLoading(true);

//     const getRestaurants = async () => {
//         try {
//             const data = await fetchData();
//             setRestaurants(data.nearby_restaurants);
//         } catch (error) {
//             setErrorMessage(error.toString())
//             setIsError(true);
//         }
//         setIsLoading(false);
//     }

//     getRestaurants();
// }, [count]);
