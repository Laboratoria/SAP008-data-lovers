import data from "./data/pokemon/pokemon.js";
//const tipo = document.getElementById("type");
//const searview = document.querySelector(".find-pokemons")
const result = document.querySelector(".result")

let itemType = [];
let itemRarity = [];

function getPokeList() {
  result.innerHTML = data.pokemon.map((item) => {
    itemType = [];
    itemRarity = [];

    itemType.push(item.type)
    itemRarity.push(item.rarity)

    return ` <div class="container_item">
        <p class="pokeNumber">${item.num}</p>
        <div class="boxImg">
          <figure class= "pokeData">
            <img class="poke-img" src='${item.img}' alt=${item.name}>
          </figure>
          <div class="items">
          <h4>  ${item.name[0].toUpperCase() + item.name.substr(1)}</h4>
          <span class="listName listType">Tipo: ${item.type}</span>
          <span class="listName listRarity">Raridade: ${item["pokemon-rarity"]}</span>
        </div>
      </div>
      </div>
      `
  })
}

getPokeList()


