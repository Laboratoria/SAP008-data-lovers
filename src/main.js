//import {} from './data.js';

import data from "./data/ghibli/ghibli.js";

const ghibliMovies = data.films;

cardsMovies(ghibliMovies);

function cardsMovies(movies) {
  const printCard = movies.map((films) => {
    return `
<div class="cardContainer">
  <div class="image">
    <img class="picture" src="${films.poster}" alt="movie picture">
  </div>
  <div class="movieName">${films.title}</div>
  <ul class="info">
    <li>Description: ${films.description}</li>
    <li>Release date: ${films.release_date}</li>
    <li>Director: ${films.director}</li>
    <li>Producer: ${films.producer}</li>
  </ul>
</div>
`;
  });
  document.getElementById('cards-movies').innerHTML = printCard.join("")
}

