import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const refs = {
   select: document.querySelector('.breed-select'),
   info: document.querySelector('.cat-info'),
}

fetchBreeds().then((data) => {
   // console.log('data = ', data)
   refs.select.innerHTML = selectMarkup(data);
})

refs.select.addEventListener('input', showBreedInfo);

function showBreedInfo(){
   // console.log(refs.select.value);
   fetchCatByBreed(refs.select.value).then((data) => {
      // console.log(data[0].breeds[0], data[0].url);
      // console.log('data info = ', data);
   refs.info.innerHTML = infoMarkup(data[0].breeds[0], data[0].url);
      // refs.select.innerHTML = selectMarkup(data);
      // createMarkup(data.map(el=>({id: el.id, name: el.name})));
   })
}

function selectMarkup(breeds){
   return breeds.map(el=>`<option value="${el.id}">${el.name}</option>`).join('')
}

function infoMarkup(card, url){
   // const card = breeds.find(el=>el.id===id);
   // console.log('card = ', card)
   return `<img src="${url}" alt="" width="480">
      <div class="card">
      <h2>${card.name}</h2>
      <p>${card.description}</p>
      <p><span>Temperament: </span>${card.temperament}</p>
      </div>`;
}

// function fetchBreeds(){
//    // axios.get('/breeds')
//    return fetch('https://api.thecatapi.com/v1/breeds')   
//       .then((response) => {
//          console.log('resp = ', response)
//          if (!response.ok){
//             throw new Error(response.statusText)
//          }
//          return response.json();
//       })
//    }
// http://{{endpoint}}v1/breeds
// const url = `https://api.thecatapi.com/v1/breeds`;
// const api_key = "live_HeQ7xUwbJSLNWe2ZoqTieO32r0KlGBT5vace3dTzwsqHV2re6MjUERQQkYoUePrt"
// let storedBreeds = []

//  fetch(url,{headers: {
//       'x-api-key': api_key
//     }})
//  .then((response) => {
//    return response.json();
//  })
// .then((data) => {
//    console.dir(data);
//    console.log(typeof data);

   
//    //filter to only include those with an `image` object
//    data = data.filter(img=> img.image?.url!=null)
   
//   storedBreeds = data;
   
//    for (let i = 0; i < storedBreeds.length; i++) {
//     const breed = storedBreeds[i];
//     let option = document.createElement('option');
     
//      //skip any breeds that don't have an image
//      if(!breed.image)continue
     
//     //use the current array index
//     option.value = i;
//     option.innerHTML = `${breed.name}`;
// document.getElementById('breed_selector').appendChild(option);
    
//     }
//    //show the first breed by default
//    showBreedImage(0)
// })
// .catch(function(error) {
//    console.log(error);
// });

// function showBreedImage(index)
// { 
//   document.getElementById("breed_image").src= storedBreeds[index].image.url;
  
//   document.getElementById("breed_json").textContent= storedBreeds[index].temperament
  
  
//   document.getElementById("wiki_link").href= storedBreeds[index].wikipedia_url
//   document.getElementById("wiki_link").innerHTML= storedBreeds[index].wikipedia_url
// }


// fetch(`https://api.thecatapi.com/v1/images/search&breed_ids=${breedId}`,{headers: {
//          'x-api-key': 'live_HeQ7xUwbJSLNWe2ZoqTieO32r0KlGBT5vace3dTzwsqHV2re6MjUERQQkYoUePrt'
//        }})
//     .then((response) => {
//       return response.json();
//     })


// const opt = {
//    headers: {
//       'x-api-key': 'live_HeQ7xUwbJSLNWe2ZoqTieO32r0KlGBT5vace3dTzwsqHV2re6MjUERQQkYoUePrt'
//    }
// }
// fetch('https://api.thecatapi.com/v1/images/search?breed_ids=abys', opt)
//     .then((response) => {
//       console.log('resp fetch = ', response.json())
//       // return response.json();
//     })





