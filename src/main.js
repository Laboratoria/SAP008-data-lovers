import { sortFilms, printFilmsCards, getCharacters} from './data.js';

import data from './data/ghibli/ghibli.js';

const films = data.films


function showFilmsCards (films) { 
  document.getElementById('cardsFilms').innerHTML = printFilmsCards(films)
}
console.log (getCharacters (data.films))



showFilmsCards(data.films)
const ordenator = (e) =>{
  const orderSelec = e.target.value;
  if (orderSelec !== ""){
    const filterOrder = sortFilms(films, orderSelec)
    showFilmsCards(filterOrder)
  }
}
const order = document.getElementById("inputOrder")
order.addEventListener ("change", ordenator)



