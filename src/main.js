import { sortFilms, printFilmsCards, getCharacters, filterFilms, filterDirector} from './data.js';

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

const filterByProducer = (e) => {
  const producerSelec = e.target.value;
  const filter = filterFilms (data.films, "producer", producerSelec )
  showFilmsCards(filter)
  

}
const producerFilter = document.getElementById("inputProducer")
producerFilter.addEventListener ("change", filterByProducer)





const filterByDirector = (e) => {
  const directorFilterSelec = e.target.value;
  const filter = filterDirector (data.films,"director", directorFilterSelec )
  showFilmsCards(filter)
  

}
const directorFilter = document.getElementById("inputDirector")
directorFilter.addEventListener ("change", filterByDirector)
