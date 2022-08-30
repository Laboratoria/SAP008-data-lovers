import { filterFilms, printFilmsCards, getCharacters } from './data.js';

import data from './data/ghibli/ghibli.js';

const films = data.films


function showFilmsCards () { 
  document.getElementById('cardsFilms').innerHTML = printFilmsCards(data.films)
}
console.log (getCharacters (data.films))


showFilmsCards()

const searchMovie = () =>{
  const valueSelec = searchFilms.value;
  const movieSelec = filterFilms(films, valueSelec);
  printCards(movieSelec);
}

const searchFilms = document.querySelector("#filtro");
searchFilms.addEventListener("keyup", searchMovie);

