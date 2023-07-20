import axios from "axios";

const API_KEY = 'live_HeQ7xUwbJSLNWe2ZoqTieO32r0KlGBT5vace3dTzwsqHV2re6MjUERQQkYoUePrt';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

async function fetchBreeds(){
   try {
      const {data} = await axios.get('/breeds');
      return data
   } catch (error) {
      console.log('oops = ', error.message)
   }
}

async function fetchCatByBreed(breedId){
   try {
      const request = `/images/search?api_key=${API_KEY}&breed_ids=${breedId}`;      
      const {data} = await axios.get(request);
      return data
   } catch (error) {
      console.log('oops = ', error.message)      
   }
}

export {fetchBreeds, fetchCatByBreed}