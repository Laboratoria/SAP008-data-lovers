import { ghibli } from './data.js';
import data from './data/ghibli/ghibli.js';
// console.log(data);

const films = data.films;
const catalogue = document.querySelector('.catalogue');


function cartoes {
  let cards = ghibli.addTela(films);
  catalogue.innerHTML = cards;
}

// addTela (films);



const filterDuration = document.querySelector('#filter-duration');
filterDuration.addEventListener ('change', selectedDuration);

function selectedDuration(selected) {
  const filmsDuration = films.filter(function (film){
    if (selected.target.value === '90min'){
      return film.duration <= 90;
    } else if (selected.target.value === '120min'){
      return film.duration > 90 && film.duration <= 120;
    } else if (selected.target.value === '150min'){
      return film.duration > 120;
    }
    return film;
  })
  addTela (filmsDuration)
}


// ======== FILTRO DE GENERO PARA USAR NOS PERSONAGENS =========
// let selectedGender = document.getElementById('filter-gender');
// selectedGender.addEventListener('change', genderFilter);

// function genderFilter(event) { 
//   // console.log (evento.target.value);

//   const filmesfiltrados = films.filter(function (film){
//     const personAndGender = film.people.filter (function (person){
//       return person.gender === event.target.value;
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