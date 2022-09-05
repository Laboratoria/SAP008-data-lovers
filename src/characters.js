import data from "./data/ghibli/ghibli.js";

function cardsCharacters(films) {
  let characters = []
  let titleFilms = []
  films.map(film =>{
    film.people.map(person => {
      characters.push(person) 
      titleFilms.push(film.title) 
    })
  })
  document.getElementById('cards-characters').innerHTML = characters.map((card, index) => {
  return `
  <div class="cardContainer">
  <h2 class="titleFilms">${titleFilms[index]}</h2>
   <div class="image">
     <img class="picture" src="${card.img}" alt="character picture">
   </div>
   <div class="name">${card.name}</div>
   <ul class="info">
     <li>Age: ${card.age}</li>
     <li>Gender: ${card.gender}</li>
     <li>Specie: ${card.specie}</li>
   </ul>
 </div>
  `
 }).join("")
}

const imageValidation = () => {

  let arrayImgs = document.querySelectorAll(".picture")

  for (let img of arrayImgs) {
    const url = img.getAttribute("src")
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (xhr.status != 200) {
        img.setAttribute("src", "img/not-found2.png")
      }
    };

    xhr.open('HEAD', url);
    xhr.send();
  }
}

imageValidation()

cardsCharacters(data.films)
