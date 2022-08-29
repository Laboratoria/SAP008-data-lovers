import { filterFilms } from './data.js';

import data from './data/ghibli/ghibli.js';

const films = data.films

function printCards(data ) {
  document.getElementById('cardsFilms').innerHTML = data.map((item) =>
    `
  <div class="cards">
    <div class="cardFlip">
      <div class="front">
        <figure>
          <img src = "${item.poster}" class = "poster">
        </figure>
      </div>
      <div class="back">
        <p class = "titles"><strong>${item.title} </strong></p><br>
        <p class = "infoFilms"><strong>Release Date: </strong>${item.release_date}</p><br>
        <p class = "infoFilms"><strong>Description: </strong>${item.description}</p><br>
        <p class = "infoFilms"><strong>Director: </strong>${item.director}<p><br>
        <p class = "infoFilms"><strong>Producer: </strong>${item.producer}<p><br>
        <p class = "infoFilms"><strong>Score: </strong>${item.rt_score}<p><br>
      </div>
     </div>
    </div>
    `
    )
  .join('');
}

printCards(data.films)

const searchMovie = () =>{
  const valueSelec = searchFilms.value;
  const movieSelec = filterFilms(films, valueSelec);
  printCards(movieSelec);
}

const searchFilms = document.querySelector("#filtro");
searchFilms.addEventListener("keyup", searchMovie);




      
      
    

      

 
  