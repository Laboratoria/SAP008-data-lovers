import {sortByAZ, sortByZA, filterData, filterName, computeStats} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

function showCards(data) {
  document.getElementById('listening').innerHTML = data.map((item) => `
  <div class="flip-container">
     <div class="flipper">
        <div class="front">
           <img  class= "image" src="${item.image}">
           <h3><strong> ${item.name}</strong></h3>
           <p class="text">${item.species}</p>
           <p class="text">${item.gender} * ${item.status}</p> 
           <p class="text">${item.location.name}<p>
        </div> 
        <div class="back">
        <h2>${item.name}</h2>
        </div>
    </div>
</div>  
`)
}

showCards(data.results);
  
