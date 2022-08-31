// import {} from './data.js';

import data from "./data/ghibli/ghibli.js";

cardsMovies(data.films);

function cardsMovies(movies) {
    const printCard = movies.map((films) => {
      return `
  <div class="card-container">
    <ul class="info">
      <img class="picture" src="${films.poster}" alt="movie picture">
      <li class="movie-name"><strong>${films.title}</strong></li>  
      <li class="info2"><strong>Description:</strong> ${films.description}</li>
      <li class="info2"><strong>Release date:</strong> ${films.release_date}</li>
      <li class="info2"><strong>Director:</strong> ${films.director}</li>
      <li class="info2"><strong>Producer:</strong> ${films.producer}</li>
    </ul>
  </div>
  `;
    });
    document.getElementById('cards-movies').innerHTML = printCard.join("")
  }