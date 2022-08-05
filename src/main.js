import data from "./data/pokemon/pokemon.js";

const selectType = document.getElementById("pokeType");
const searchInput = document.querySelector("#searchPokemon")
const buttonSearch = document.querySelector('#btn-find')
const result = document.querySelector(".result")
const buttonClean = document.getElementById("btn-clean");
const pokeArray = data.pokemon

buttonSearch.addEventListener("click", filterPokemons)

function printCards(pokeArray) {

  result.innerHTML = pokeArray.map(
    (item) => `<div class="container_item">
  <div class="boxImg">
    <p class="pokeNumber">${item.num}</p>
 <figure class= "pokeData">
   <img class="poke-img" src='${item.img}' alt=${item.name}>
 </figure>
   <div class="items"></div>
    <h4>  ${item.name[0].toUpperCase() + item.name.substr(1)}</h4>
<span class="listName"> Tipo: ${item.type}</span>
<span class="listRarity"> Raridade: ${item["pokemon-rarity"]}</span>
  </div>
</div>
`
  ).join('')
}
printCards(pokeArray)

function filterPokemons() {
  const select = selectType.value
  const filterAddPokemons = data.pokemon.filter(({ type }) => type == select)
  printCards(filterAddPokemons)
}

buttonClean.addEventListener("click", cleanFilters);
function cleanFilters() {
  window.location.reload();
}

