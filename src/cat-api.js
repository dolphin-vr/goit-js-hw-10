import axios from "axios";

const API_KEY = 'live_HeQ7xUwbJSLNWe2ZoqTieO32r0KlGBT5vace3dTzwsqHV2re6MjUERQQkYoUePrt';
// const axiosCat = axios.create({
//    baseURL: 'https://api.thecatapi.com/v1/',
//    headers: {'x-api-key': 'live_HeQ7xUwbJSLNWe2ZoqTieO32r0KlGBT5vace3dTzwsqHV2re6MjUERQQkYoUePrt'},
//  });
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
// axios.defaults.headers.common['x-api-key'] = 'live_HeQ7xUwbJSLNWe2ZoqTieO32r0KlGBT5vace3dTzwsqHV2re6MjUERQQkYoUePrt';
// axios.defaults.headers.common["x-api-key"] = "live_HeQ7xUwbJSLNWe2ZoqTieO32r0KlGBT5vace3dTzwsqHV2re6MjUERQQkYoUePrt";


async function fetchBreeds(){
   try {
      const {data} = await axios.get('/breeds');
      // console.log(data)
      return data
   } catch (error) {
      console.log(error.message)
   }
}


async function fetchCatByBreed(breedId){
   try {
      const request = `/images/search?api_key=${API_KEY}&breed_ids=${breedId}`;      
      const {data} = await axios.get(request);
      // console.log('axios resp = ', data)
      return data
   } catch (error) {
      console.log(error.message)      
   }
}

// function fetchCatByBreed(breedId){
//    fetch(`https://api.thecatapi.com/v1/images/search&breed_ids=${breedId}`,{headers: {
//          'x-api-key': 'live_HeQ7xUwbJSLNWe2ZoqTieO32r0KlGBT5vace3dTzwsqHV2re6MjUERQQkYoUePrt'
//        }})
//     .then((response) => {
//       console.log('resp info = ', response.json())
//       return response.json();
//     })
// }

export {fetchBreeds, fetchCatByBreed}