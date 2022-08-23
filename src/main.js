import data from './data/rickandmorty/rickandmorty.js';
import { computeStats, filterData} from './data.js';


function printCards(data) {
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

printCards(data.results);

const selectGender = document.querySelector(".select-gender");
const selectSpecies = document.querySelector(".select-species");
const selectStatus = document.querySelector(".select-status"); 
const searchName = document.getElementById("typed-text");
const stats = document.querySelector(".stats");


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

 function filterByName() {
   return printCards(filterName(data.results, searchName.value));
 }
 

selectGender.addEventListener("change", printGenderFiltered);
selectSpecies.addEventListener("change", printSpeciesFiltered);
selectStatus.addEventListener("change", printStatusFiltered);
searchName.addEventListener("keydown", printSearch); 
   //return printCards(data.results);

