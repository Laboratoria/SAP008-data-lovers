import data from "./data/pokemon/pokemon.js";
import {printCards, selectNameAz, selectNameZa} from './data.js'


const buttonClean = document.getElementById("newSearch");
const orderPokemon = document.getElementById("order");
const result = document.getElementById("result");
const searchName = document.getElementById("findPokemon");
const selectType = document.getElementById("pokeType");
const selectRarity = document.getElementById("rarity");
const spanClose = document.querySelector("#close");
displayCard()



buttonClean.addEventListener("click", newSearch);
orderPokemon.addEventListener("change", pokemonOrdenar); 
selectRarity.addEventListener("change", displayCard)
selectType.addEventListener("change", displayCard)
searchName.addEventListener("keypress", displayCard)
spanClose.addEventListener("click", hideModal);
selectType.addEventListener("change", pokeCalc);


/*function newSearch() {
  selectType.value = "";
  selectRarity.value = "";
  searchName.value = "";
  selectNameAz.value = "";
  selectNameZa.value = "";
  displayCard()
} */

function newSearch() {
  window.location.reload();
}


function pokeCalc() {
  const modalContentElement = document.getElementById('modal_content');
  const modalElement = document.getElementById('modal');
  modalElement.classList.add('show-modal');

  const select = selectType.value
  const pokemonData = data.pokemon.filter((pokemon) => pokemon.type.includes(select))
  const pokeLenght = data.pokemon.length

  for (let pokemons = 0; pokemons <= pokemonData.length; pokemons++) {
    if (select === selectType.value) {
      modalContentElement.innerHTML = `Existem um total de: <b> ${pokemons} </b>pokemons do tipo <b>${select}</b>. Isso representa uma média de <b> ${parseFloat((pokemons / pokeLenght) * (100)).toFixed(2)}%</b> de todos os Pokemons.`
    }
  }

}
function hideModal() {
  const modalElement = document.getElementById('modal');
  modalElement.classList.remove('show-modal');
}

function displayCard () {
  result.innerHTML = printCards(data, selectRarity.value, selectType.value, searchName.value)  
}



function pokemonOrdenar() {
const ordenar = orderPokemon.value;

  if (ordenar === "nome-crescente") {
        selectNameAz(data.pokemon);
        displayCard();
    
    } else if (ordenar === "nome-decrescente") {
        selectNameZa(data.pokemon);
        displayCard();
         }
}