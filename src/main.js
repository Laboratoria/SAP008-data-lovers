import {ghibli} from './data.js';
import data from './data/ghibli/ghibli.js';

const films = data.films;

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

