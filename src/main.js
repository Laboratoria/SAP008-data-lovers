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
  
function printGenderFiltered() {
    showCalculation.style.display = "flex";
    //showCalculation.innerHTML = `This category represents ${computeStats(data.results, "gender", selectGender.value)}`//
    return printCards(filterData(data.results, "gender", selectGender.value));
  }
  
  function printSpeciesFiltered() {
    showCalculation.style.display = "flex";
    //showCalculation.innerHTML = `O número de personagens dessa categoria é ${computeStats(data.results, "species", selectSpecies.value)}`//
    return printCards(filterData(data.results, "species", selectSpecies.value));
  }

    document.getElementById("btn-order-az").addEventListener("click", printCharacterAZ);
    document.getElementById("btn-order-za").addEventListener("click", printCharacterZA);
    selectGender.addEventListener("change", printGenderFiltered);
    selectSpecies.addEventListener("change", printSpeciesFiltered);
    selectStatus.addEventListener("change", printStatusFiltered);
    searchName.addEventListener("keypress", filterByName);
    searchName.addEventListener("keydown", event => {
    if (event.keyCode === 8) {
        return showCards(data.results);
  }
})

  
   
    
