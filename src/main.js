import data from "./data/pokemon/pokemon.js";
import { printCards, selectNameAz, selectNameZa } from './data.js'

const buttonClean = document.getElementById("newSearch");
const orderPokemon = document.getElementById("order");
const result = document.getElementById("result");
const searchName = document.getElementById("findPokemon");
const selectType = document.getElementById("pokeType");
const selectRarity = document.getElementById("rarity");
const spanClose = document.querySelector("#close");

displayCard()

buttonClean.addEventListener("click", newSearch);
orderPokemon.addEventListener("change", pokemonOrder);
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

function displayCard() {
  result.innerHTML = printCards(data, selectRarity.value, selectType.value, searchName.value)
}

function pokemonOrder() {
  const order = orderPokemon.value;

  if (order === "name-az") {
    selectNameAz(data.pokemon);
    displayCard();

  } else if (order === "name-za") {
    selectNameZa(data.pokemon);
    displayCard();
  }
}

const buttonAction = function (index) {
  return function () {
    const pokemonData = data.pokemon

    const modalContentElement = document.getElementById('modal_content');
    const modalElement = document.getElementById('modal');
    modalElement.classList.add('show-modal');

    modalContentElement.innerHTML =
      ` <figure class= "pokeData">
         <img class="poke-img-info" src='${pokemonData[index].img}' alt=${pokemonData[index].name}>
          <h4 id="title">  ${pokemonData[index].name[0].toUpperCase() + pokemonData[index].name.substr(1)}</h4>
        </figure>
       <div class="pokeMoreInfo">
        <span class="pokeInfoAbout">${pokemonData[index].about}</span>
       </div> `
  }
};

function moreInfo() {
  var cardOnClick = document.getElementsByClassName("poke-img");
  for (var i = 0; i < cardOnClick.length; i++) {
    cardOnClick[i].addEventListener('click', buttonAction(i), false);
  }
}
moreInfo()


