import data from './data/ghibli/ghibli.js';
let movies = data.films

function showFilms(data) {
  const filmsInfo = data.map((item) => {
    return `
  <div class="flipCard">
        <div class="flipCardInner">
         <div class="flipCardFront">
          <p class="titleOfFilm"><strong>${item.title}</strong></p>
          <img src="${item.poster}"class="poster-card">
         </div>
        <div class="flipCardCack">
         <ul class="cardInfos">
           <li><strong>${item.title}</strong></li>
           <li><strong>Description: </strong>${item.description}</li>
           <li><strong>Director: </strong>${item.director}</li>
           <li><strong>Producer: </strong>${item.producer}</li>
           <li><strong>Release date: </strong>${item.release_date}</li>
           <li><strong>Score: </strong>${item.rt_score}</li>
         </ul>
          </div>
          </div>
        </div>
  `}).join('')

  document.getElementById('cards').innerHTML = filmsInfo;
}

showFilms(movies);


