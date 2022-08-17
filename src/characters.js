import data from './data/ghibli/ghibli.js';
let characters = data.films

function showCharacters(data) {
  const CharactersInfo = data.map((item) => {
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

  document.getElementById('cards').innerHTML = CharactersInfo;
}

showCharacters(characters)