import {ghibli} from './data.js';
import data from './data/ghibli/ghibli.js';

// ===== Exibir Cards =====
const films = data.films;
const modal = document.querySelector('.modal');

function montarTela (films){
  const catalogue = document.querySelector('.catalogue');
  catalogue.innerHTML = ghibli.printCatalogue(films);

  const btnModal = document.querySelectorAll('.btn-modal');

  for (let i = 0; i < films.length; i++){
    const showModal = prepareModal(films[i]);
    btnModal[i].addEventListener ('click', showModal);
  }
}
montarTela(films);

function prepareModal (film) {
  return function (){
    modal.innerHTML = ghibli.printModal(film);
    const closeModal = document.querySelector('.close');
    closeModal.addEventListener ('click', btnHideModal);
    showModal ();
  }
}

modal.addEventListener ('click', hideModal);

function showModal(){
  modal.style.display = "block";
}

function btnHideModal(){
  modal.style.display = "none";
}

function hideModal(e){
  if (e.target == modal){
  modal.style.display = "none";
  }
}

const btnFilterDuration = document.querySelector('#filter-duration');
btnFilterDuration.addEventListener ('change', () => {
  const selected = (btnFilterDuration).value;
  const filterDuration = ghibli.filterDuration(films, selected);
  montarTela(filterDuration);
});

const btnOrderFilms = document.querySelector('#order-by');
btnOrderFilms.addEventListener('change', () => {
  let selection = btnOrderFilms.value;
  const sortedFilms = ghibli.sortedFilms(films, selection);
  montarTela(sortedFilms);
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

