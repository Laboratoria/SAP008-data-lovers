import data from "./data/ghibli/ghibli.js";

function cardsCharacters(films) {
  let characters = [];
  let titleFilms = [];
  films.map((film) => {
    film.people.map((person) => {
      characters.push(person);
      titleFilms.push(film.title);
    });
  });
  document.getElementById("cards-characters").innerHTML = characters
    .map((card, index) => {
      return `
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <div class="box-image">
          <div class="image" style="background-image: url(${card.img});"></div>
        </div>
        <h1>${card.name}</h1>
      </div> 
      <div class="flip-card-back">
        <ul class="info">
          <li>Age: ${card.age}</li>
          <li>Gender: ${card.gender}</li>
          <li>Specie: ${card.specie}</li>
        </ul>
        <h4>Movie:</h4>
        <h3>${titleFilms[index]}</h3>
        <img class="img-back" src="${card.img}"/>
      </div>
    </div>
 </div>
  `;
    })
    .join("");
}

cardsCharacters(data.films);
