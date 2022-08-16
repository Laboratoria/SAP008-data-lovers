import {ghibli} from './data.js';
import data from './data/ghibli/ghibli.js';

const films = data.films;
const catalogue = document.querySelector('.catalogue');
catalogue.innerHTML = ghibli.printCatalogue(films);

const btnFilterDuration = document.querySelector('#filter-duration');
btnFilterDuration.addEventListener ('change', () => {
  const selected = (btnFilterDuration).value;
  catalogue.innerHTML = ghibli.filterDuration(films, selected);
});

const orderFilms = document.querySelector('#order-by');
orderFilms.addEventListener('change', () => {
  let selection = orderFilms.value;
  catalogue.innerHTML = ghibli.sortedFilms(films, selection);
});

const resultCountFilms = document.querySelector('#count-films');
const resultCountPeople = document.querySelector('#count-people');
const resultCountLocations = document.querySelector('#count-locations');
const resultCountVehicles = document.querySelector('#count-vehicles');

resultCountFilms.innerHTML = ghibli.countFilms(films);
resultCountPeople.innerHTML = ghibli.countPeople(films);
resultCountLocations.innerHTML = ghibli.countLocations(films);
resultCountVehicles.innerHTML = ghibli.countVehicles(films);

// ======== FILTRO DE GENERO PARA USAR NOS PERSONAGENS =========
// let selectedGender = document.getElementById('filter-gender');
// selectedGender.addEventListener('change', genderFilter);

// function genderFilter(evento) { 
//   // console.log (evento.target.value);

//   const filmesfiltrados = films.filter(function (film){
//     const personAndGender = film.people.filter (function (person){
//       return person.gender === evento.target.value;
//     }) 
//     if (event.target.value === 'Gender'){
//       return film;
//     }
//     // console.log (personAndGender.length, film.people);
//     return personAndGender.length >= (film.people.length/2);
//   })
//   // console.log (filmesfiltrados);
//   addTela (filmesfiltrados);
// }

// ==== Modal ====
// const btnModal = document.querySelectorAll('.btn-modal');
// const modal = document.querySelector('.modal');

// for (let i = 0; i < films.length; i++){
//   const showModal = prepareModal(films[i]);
//   btnModal[i].addEventListener ('click', showModal);
// }

// function prepareModal (film) {
//   return function (){
//     modal.innerHTML = mostrarModal(film);
//     const closeModal = document.querySelector('.close');
//     closeModal.addEventListener ('click', btnHideModal);
//     showModal();
//   }
// }

// // const root = document.querySelector('.root');
// modal.addEventListener ('click', hideModal);

// function showModal(){
//   modal.style.display = "block";
// }

// function btnHideModal(){
//   modal.style.display = "none";
// }

// function hideModal(e){
//   if (e.target == modal){
//   modal.style.display = "none";
//   }
// }