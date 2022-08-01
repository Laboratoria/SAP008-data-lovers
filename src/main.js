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

getPokeList()


