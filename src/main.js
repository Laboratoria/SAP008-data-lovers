import data from "./data/pokemon/pokemon.js";
import { searchName, selectType, selectRarity } from './data.js'
import { printCards } from "./data.js"

const buttonClean = document.getElementById("newSearch");
const pokeCalcResult = document.querySelector('.pokeCalc')

buttonClean.addEventListener("click", newSearch);

function newSearch() {
  selectType.value = "";
  selectRarity.value = "";
  searchName.value = "";
  printCards(data.pokemon);
}

function pokeCalc(){


  }

pokeCalc()
