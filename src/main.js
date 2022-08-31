import {
  sortByAZ,
  sortByZA,
  filterData,
  filterName,
  computeStats,
  filterEpisode,
} from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

function printCards(data) {
  const mapa = data.map((item) => {
    const regex = /\d+/g;
    const episodes = item.episode.toString();
    const number = episodes.match(regex);
    const numberBackspace = number.join(", ");
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
</div>`;
  });
  document.getElementById("listening").innerHTML = mapa.join(" ");
}

printCards(data.results);

const selectGender = document.querySelector(".select-gender");
const selectSpecies = document.querySelector(".select-species");
const selectStatus = document.querySelector(".select-status");
const selectEpisode = document.querySelector(".select-episode");
const searchName = document.getElementById("search");
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
  stats.innerHTML = `The number of characters in this category is ${computeStats(
    data.results,
    "gender",
    selectGender.value
  )}`;
  return printCards(filterData(data.results, "gender", selectGender.value));
}

function printSpeciesFiltered() {
  stats.style.display = "flex";
  stats.innerHTML = `The number of characters in this category is ${computeStats(
    data.results,
    "species",
    selectSpecies.value
  )}`;
  return printCards(filterData(data.results, "species", selectSpecies.value));
}

function printStatusFiltered() {
  stats.style.display = "flex";
  stats.innerHTML = `The number of characters in this category is ${computeStats(
    data.results,
    "status",
    selectStatus.value
  )}`;
  return printCards(filterData(data.results, "status", selectStatus.value));
}

function printFilterByName() {
  stats.style.display = "flex";
  stats.innerHTML = `The number of characters in this category is ${computeStats(
    data.results,
    searchName.value
  )}`;
  return printCards(filterName(data.results, searchName.value));
}

function printFilterByEpisode() {
  stats.style.display = "flex";
  return printCards(filterEpisode(data.results, selectEpisode.value));
}

document
  .getElementById("btn-order-az")
  .addEventListener("click", printCharacterAZ);
document
  .getElementById("btn-order-za")
  .addEventListener("click", printCharacterZA);
selectGender.addEventListener("change", printGenderFiltered);
selectSpecies.addEventListener("change", printSpeciesFiltered);
selectStatus.addEventListener("change", printStatusFiltered);
selectEpisode.addEventListener("change", printFilterByEpisode);
searchName.addEventListener("keypress", printFilterByName);
searchName.addEventListener("keydown", (event) => {
  if (event.KeyCode === 8) {
    return printCards(data.results);
  }
});
