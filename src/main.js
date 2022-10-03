import { sortFilms, getCharacters, filterByCriteriaValue } from './data.js';

import data from './data/ghibli/ghibli.js';

const films = data.films

function printFilmsCards(data) {
  return data.map((item) =>
    `
<div class="cards">
    <div class="cardFlip">
      <div class="front">
        <figure>
          <img src = "${item.poster}" class = "poster">
        </figure>
      </div>
      <div class="back">
        <p class = "titles"><strong>${item.title} </strong></p>
        <p class = "infoFilms"><strong>Release Date: </strong>${item.release_date}</p>
        <p class = "infoFilms"><strong>Description: </strong>${item.description}</p>
        <p class = "infoFilms"><strong>Director: </strong>${item.director}<p>
        <p class = "infoFilms"><strong>Producer: </strong>${item.producer}<p>
        <p class = "infoFilms"><strong>Score: </strong>${item.rt_score}<p>
      </div>
     </div>
    </div>
    


    `
  )
    .join('');
}


function showFilmsCards(films) {
  document.getElementById('cardsFilms').innerHTML = printFilmsCards(films)
}
console.log(getCharacters(data.films))


// ordenar
showFilmsCards(data.films)
const ordenator = (e) => {
  const orderSelec = e.target.value;
  if (orderSelec !== "") {
    const filterOrder = sortFilms(films, orderSelec, "title")
    showFilmsCards(filterOrder)
  }
}

const order = document.getElementById("inputOrder")
order.addEventListener("change", ordenator)


//filtro produtor
const filterByProducer = (e) => {
  const producerSelec = e.target.value;
  const filter = filterByCriteriaValue(data.films, "producer", producerSelec)
  showFilmsCards(filter)


}
const producerFilter = document.getElementById("inputProducer")
producerFilter.addEventListener("change", filterByProducer)



// filtro diretor

const filterByDirector = (e) => {
  const directorFilterSelec = e.target.value;
  const filter = filterByCriteriaValue(data.films, "director", directorFilterSelec)
  showFilmsCards(filter)


}
const directorFilter = document.getElementById("inputDirector")
directorFilter.addEventListener("change", filterByDirector)




