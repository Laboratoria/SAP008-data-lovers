import data from "./data/pokemon/pokemon.js";

//import { inputNome } from "./data.js";

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

const buttonClean = document.getElementById("btn-clean");
function cleanFilters() {
    window.location.reload();
}
buttonClean.addEventListener("click", cleanFilters);



/*const button = document.getElementById("btn-find"); 
button.addEventListener("click", nomePokemon); 

function nomePokemon(event) {
    event.preventDefault(); 
    const buscarPokemon = document.getElementById("findPokemon").value; 
    const pokemonNome = inputNome(buscarPokemon, data.pokemon);
    getPokeList(pokemonNome);
}

// Printar dados por Loop For
const pokeTipo = document.getElementById("result")
for (let i = 0; i < data.pokemon.length; i++) {
    for (let j = 0; j < data.pokemon[i].type.length; j++) {
        console.log("Pokemon " + data.pokemon[i].name + " type " + data.pokemon[i].type[j]);
    pokeTipo.innerHTML += "Pokemon " + data.pokemon[i].name + " type " + data.pokemon[i].type[j]
    }
}
*/