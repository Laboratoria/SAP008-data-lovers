import data from "./data/pokemon/pokemon.js";
import { searchName, spanClose, hideModal, selectRarity } from './data.js'
import { printCards } from "./data.js"

const buttonClean = document.getElementById("newSearch");
const selectType = document.getElementById("pokeType");

buttonClean.addEventListener("click", newSearch);

function newSearch() {
  selectType.value = "";
  selectRarity.value = "";
  searchName.value = "";
  printCards(data.pokemon);
}

selectType.addEventListener("change", pokeCalc)
function pokeCalc() {
  const modalContentElement = document.getElementById('modal_content');
  const modalElement = document.getElementById('modal');
  modalElement.classList.add('show-modal');

  const select = selectType.value
  const pokemonData = data.pokemon.filter((pokemon) => pokemon.type.includes(select))
  const pokeLenght = data.pokemon.length

  for (let pokemons = 0; pokemons <= pokemonData.length; pokemons++) {
    if (select === select) {
      modalContentElement.innerHTML = `Existe um total de: <b> ${pokemons} </b>pokemons do tipo <b>${select}</b>. Isso representa uma média de <b> ${parseFloat((pokemons / pokeLenght) * (100)).toFixed(2)}%</b> de todos os Pokemons.`
    }
  }

}
