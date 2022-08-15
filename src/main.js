import {addTela, selectedDuration, sorted} from './data.js';
import data from './data/ghibli/ghibli.js';

// ===== Intro e somatórios =====


// ===== Exibir Cards =====
const films = data.films;
const catalogue = document.querySelector('.catalogue');
catalogue.innerHTML = addTela(films);

// ===== Filtro Tempo =====
const filterDuration = document.querySelector('#filter-duration');
filterDuration.addEventListener ('change', filterSelected);

function filterSelected () {
  const selected = (filterDuration).value;
  catalogue.innerHTML = selectedDuration(films, selected, filterDuration);
}

// ===== Ordenação =====
const orderFilms = document.querySelector('#order-by');
orderFilms.addEventListener('change', () => {
  let selection = orderFilms.value;
  catalogue.innerHTML = sorted(films, selection);
});


const modal = document.querySelector('.modal');
const closeModal = document.querySelectorAll('.close');
const btnModal = document.querySelectorAll('.btn-modal');

// console.log (modal);

// function showModal (){
//   for (let i = 0; i < films.length; i++){
//     modal[i].style.display = "block";
//   }  
// }

// function hideModal (){
//   for (let i = 0; i < films.length; i++){
//     modal[i].style.display = "none";
//   }
// }
function showModal (){
  modal.style.display = "block";
}

function hideModal (){
  modal.style.display = "none";
}

for (let i = 0; i < btnModal.length; i++){
  btnModal[i].addEventListener ('click', showModal);
  closeModal[i].addEventListener ('click', hideModal);
}



// function functionModal (){
//   films.forEach(film => {
//     modal.style.display = "block";
//   }); 
// }

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