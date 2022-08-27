import {sortByAZ, sortByZA, filterData, filterName, computeStats} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


function printCards(data) {
  document.getElementById('listening').innerHTML = data.map((item) => `
  <div class="flip-container">
     <div class="flipper">
        <div class="front">
           <img  class= "image" src="${item.image}">
           <h3><strong> ${item.name}</strong></h3>
           <p class="text">${item.species}</p>
           <p class="text">${item.gender} * ${item.status}</p> 
        </div> 
        <div class="back">
        <h2>${item.name}</h2>
        <h4 class="text">${item.location.name}</h4>
        </div>
    </div>
</div>  
`)
}

printCards(data.results);

const selectGender = document.querySelector(".select-gender");
const selectSpecies = document.querySelector(".select-species");
const selectStatus = document.querySelector(".select-status"); 
const searchName = document.querySelector(".btn");
const stats = document.querySelector(".stats");

function printCharacterAZ() {
   searchName.style.display = "flex";
   return printCards(sortByAZ(data.results));
}

function printCharacterZA() {
   searchName.style.display = "flex";
   return printCards(sortByZA(data.results));
}

function printGenderFiltered() {
  stats.style.display = "flex";
  stats.innerHTML = `The number of characters in this category is ${computeStats(data.results, "gender", selectGender.value)}`
  return printCards(filterData(data.results, "gender", selectGender.value));
}

function printSpeciesFiltered() {
  stats.style.display = "flex";
  stats.innerHTML = `The number of characters in this category is ${computeStats(data.results, "species", selectSpecies.value)}`
  return printCards(filterData(data.results, "species", selectSpecies.value));
}

function printStatusFiltered() {
   stats.style.display = "flex";
   stats.innerHTML = `The number of characters in this category is ${computeStats(data.results, "status", selectStatus.value)}`
   return printCards(filterData(data.results, "status", selectStatus.value));
}

function printFilterByName() {
   stats.style.display = "flex";
   stats.innerHTML = `The number of characters in this category is ${computeStats(data.results, "search", searchName.value)}`
   return printCards(filterName(data.results, "search", searchName.value));
}
 
document.getElementById("btn-order-az").addEventListener("click", printCharacterAZ);
document.getElementById("btn-order-za").addEventListener("click", printCharacterZA);
selectGender.addEventListener("change", printGenderFiltered);
selectSpecies.addEventListener("change", printSpeciesFiltered);
selectStatus.addEventListener("change", printStatusFiltered);
searchName.addEventListener("keypress", printFilterByName);
searchName.addEventListener("keydown", event => {
   if (eventKeyCode=== 8) {
     return printCards(data.results);
   }
})
   

