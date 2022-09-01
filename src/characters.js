import data from "./data/ghibli/ghibli.js";

function cardsCharacters(films) {
  let characters = []
  films.map(film =>{
    film.people.map(person => {
      characters.push(person)
    })
  })
 characters.map((card) => {
  return `
  <div class="cardContainer">
   <div class="image">
     <img class="picture" src="${card.img}" alt="character picture">
   </div>
   <div class="name">${card.name}</div>
   <ul class="info">
     <li>age: ${card.age}</li>
     <li>gender: ${card.gender}</li>
     <li>specie: ${card.specie}</li>
   </ul>
 </div>
  `
 })
 document.getElementById('cards-characters').innerHTML = characters.join("")
}

cardsCharacters(data.films)
