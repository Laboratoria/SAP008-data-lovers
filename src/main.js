// import { example } from './data.js';
import data from './data/ghibli/ghibli.js';
// console.log(data);

const films = data.films;
const catalogue = document.querySelector('.catalogue');
// console.log(catalogue);
// catalogue.innerHTML = "<p>Olá</p>";

function addTela (filmsList) {
 
  const filme = filmsList.map(function (film) {
    const template = `
    <div class="poster">
      <img class="poster-img" src="${film.poster}" alt="${film.title}" name="${film.title}" >
      <h7>${film.title}</h7>
    </div>
    `;
    return template; 
  }); 
  // console.log (filme);
  catalogue.innerHTML = filme.join("");

}
addTela (films);


let selectedGender = document.getElementById('filter-gender');
selectedGender.addEventListener('change', genderFilter);

function genderFilter(evento) { 
  // console.log (evento.target.value);

  const filmesfiltrados = films.filter(function (film){
    const personAndGender = film.people.filter (function (person){
      return person.gender === evento.target.value;
    }) 
    // console.log (personAndGender.length, film.people);
    return personAndGender.length >= (film.people.length/2);
  })
  // console.log (filmesfiltrados);
  addTela (filmesfiltrados);
}