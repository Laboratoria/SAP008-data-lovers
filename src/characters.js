
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
          <img class="image" src="${card.img}"/>
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
const imageValidated = () => {

  let arrayImgs = document.querySelectorAll(".image, .img-back")

  for (let img of arrayImgs ) {
    const url = img.getAttribute("src")
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (xhr.status === 404) {
       img.setAttribute("src", "./assets/image/gifHome.webp")
      }
    };
    xhr.open('GET', url);
    xhr.send();
  }
}
imageValidated()
