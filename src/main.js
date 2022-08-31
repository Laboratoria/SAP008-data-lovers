import { filterFilms, printFilmsCards, getCharacters } from './data.js';

import data from './data/ghibli/ghibli.js';

const films = data.films


function showFilmsCards (films) { 
  document.getElementById('cardsFilms').innerHTML = printFilmsCards(films)
}
console.log (getCharacters (data.films))


showFilmsCards(data.films)

const searchMovie = () =>{
  const valueSelec = searchFilms.value;
  const movieSelec = filterFilms(films, valueSelec);
  showFilmsCards(movieSelec);
}

const searchFilms = document.querySelector("#filtro");
searchFilms.addEventListener("keyup", searchMovie);

