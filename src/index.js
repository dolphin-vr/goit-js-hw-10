import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const optNotiflx = {
   width: '410px',
   timeout: 3000,
   position: 'center-center',
   fontSize: '24px',
 };

const refs = {
   selector: document.querySelector('.breed-select'),
   info: document.querySelector('.cat-info'),
   loader: document.querySelector('.loader'),
   alerter: document.querySelector('.error'),
}

refs.selector.classList.replace('breed-select', 'is-hidden');
refs.info.classList.replace('cat-info', 'is-hidden');
refs.alerter.classList.replace('error', 'is-hidden');

fetchBreeds().then((data) => {
   refs.selector.innerHTML = selectMarkup(data);
   refs.selector.classList.replace('is-hidden', 'breed-select');
   new SlimSelect({
      select: '.breed-select'
   })
   refs.loader.classList.replace('loader', 'is-hidden');
})
.catch((err)=>{
   Notify.failure('Oops! Something went wrong! Try reloading the page!', optNotiflx);
   refs.loader.classList.replace('loader', 'is-hidden');
})

refs.selector.addEventListener('change', showBreedInfo);

function showBreedInfo(){
   refs.info.classList.replace('cat-info', 'is-hidden');
   refs.loader.classList.replace('is-hidden', 'loader');
   fetchCatByBreed(refs.selector.value).then((data) => {
      refs.info.innerHTML = infoMarkup(data[0].breeds[0], data[0].url);
      refs.info.classList.replace('is-hidden', 'cat-info');
      refs.loader.classList.replace('loader', 'is-hidden');
   })
   .catch((err)=>{
      Notify.failure('Oops! Something went wrong! Try reloading the page!', optNotiflx);
      refs.loader.classList.replace('loader', 'is-hidden');
   })
}

function selectMarkup(breeds){
   return breeds.map(el=>`<option value="${el.id}">${el.name}</option>`).join('')
}

function infoMarkup(card, url){
   return `<img src="${url}" alt="" width="480">
      <div class="card">
      <h2>${card.name}</h2>
      <p>${card.description}</p>
      <p><span>Temperament: </span>${card.temperament}</p>
      </div>`;
}
