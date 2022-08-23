import { alphabeticOrder } from './data.js';
import data from './data/ghibli/ghibli.js';
let movies = data.films
let characters = movies.reduce(function(chars, film){
  const people = film.people.map(function(char){
      char.title = film.title

      return char
  }) ;
 return chars.concat(people)

}, []);

function showCharacters(data) {
  const charactersInfo = data.map((item) => {
    return `
  <div class="flipCard">
         <div class="flipCardFront">
          <p class="charactersName"><strong>${item.name}</strong></p>
          <img src="${item.img}"class="posterCharacters">
         </div>
        <div class="flipCardCack">
         <ul class="cardInfos">
           <li><strong>${item.name}</strong></li>
           <li><strong>Gender: </strong>${item.gender}</li>
           <li><strong>Age: </strong>${item.age}</li>
           <li><strong>Eye color: </strong>${item.eye_color}</li>
           <li><strong>Hair color: </strong>${item.hair_color}</li>
           <li><strong>Specie: </strong>${item.specie}</li>
         </ul>
          </div>
          </div>

  `}).join('')

  document.getElementById('cards').innerHTML = charactersInfo;
}

showCharacters(characters)

//ORDENAR //

const selectElement = document.querySelector('#order');

selectElement.addEventListener('change', (event) => {
  const value = event.target.value
  console.log(event.target.value)
  const orderedList = alphabeticOrder(characters, value)
  showCharacters(orderedList)
});

