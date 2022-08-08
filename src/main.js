import data from "./data/pokemon/pokemon.js";

const result = document.getElementById("result");
const searchName = document.getElementById("findPokemon");
const selectType = document.getElementById("pokeType");
const selectRarity = document.getElementById("rarity");
const buttonClean = document.getElementById("btn-clean");

function printCards() {
  let pokemons = filterPokemon()
  result.innerHTML = pokemons.map((item) => {
    return `<div class="container_item">
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
      </div>
      `
  })
    .join('')
}

printCards()

function filterPokemon() {

  const pokemonData = data.pokemon.filter((pokemon) => {

    if (selectRarity.value != "") {
      if (!pokemon['pokemon-rarity'].includes(selectRarity.value)) {
        return false
      }
    }
    if (selectType.value != "") {
      if (!pokemon.type.includes(selectType.value)) {
        return false
      }
    }
    if (searchName.value != "") {
      if (!pokemon.name.includes(searchName.value)) {
        return false
      }
    }
    return true
  });
  return pokemonData

}
printCards();

selectRarity.addEventListener("change", printCards)
selectType.addEventListener("change", printCards)
searchName.addEventListener("keypress", printCards)

buttonClean.addEventListener("click", clean);

function clean() {
  selectType.value = "";
  selectRarity.value = "";
  searchName.value = "";
  printCards(data.pokemon);
}
