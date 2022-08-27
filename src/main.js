import {sortByAZ, sortByZA, filterData, filterName, computeStats} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


// \d+

function printCards(data) {
  let ep = [];
  const mapa = data.map(
    (item) => {
    const regex = /\d+/g; 
    const episodes = item.episode.toString()
    const number = episodes.match(regex)
    const numberBackspace = number.join(", ")
    console.log(number)
    return `<div class="flip-container">
     <div class="flipper">
        <div class="front">
           <img  class= "image" src="${item.image}">
           <h2 class="titleFront">${item.name}</h2>
           <p class="textFront">${item.species}</p>
           <p class="textFront">${item.gender} * ${item.status}</p> 
        </div> 
        <div class="back">
        <h2 class="titleBack">${item.name}</h2>
        <p class="textBack">${item.location.name}<p>
        <p class="textBack"><b>Episodes:</b> ${numberBackspace}</p>
        </div>
    </div>
</div>`  }); 
document.getElementById('listening').innerHTML = mapa.join(" ");
}

printCards(data.results);

const selectEpisode = document.querySelector(".selectEpisode")
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

  function printEpisodesFiltered(){
    return printCards(filterData(data.results, "episode", selectEpisode.value));
  }

    document.getElementById("btn-order-az").addEventListener("click", printCharacterAZ);
    document.getElementById("btn-order-za").addEventListener("click", printCharacterZA);
    selectGender.addEventListener("change", printGenderFiltered);
    selectSpecies.addEventListener("change", printSpeciesFiltered);
    // selectStatus.addEventListener("change", printStatusFiltered);
    selectEpisode.addEventListener("change", printEpisodesFiltered);
    searchName.addEventListener("keypress", filterByName);
    searchName.addEventListener("keydown", event => {
    if (event.keyCode === 8) {
        return showCards(data.results);
  }
})

  
   
    
