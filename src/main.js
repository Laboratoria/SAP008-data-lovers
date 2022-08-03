import data from "./data/pokemon/pokemon.js";

//import {BuscarPoke} from "./data.js";

const result = document.querySelector(".result")
let pokemons = filtrarTipo()
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

/*
function todosPoke () {
const pokeTipo = document.getElementById("result")
let pokemons = filtrarTipo()
for (let i = 0; i < pokemons.length; i++) {
    pokeTipo.innerHTML += `<div class="container_item">
    <div class="boxImg">
   <p class="pokeNumber">${pokemons[i].num}</p>
   <figure class= "pokeData">
   <img class="poke-img" src='${pokemons[i].img}' alt=${pokemons[i].name}>
   </figure>
 <div class="items"></div>
 <h4>  ${pokemons[i].name[0].toUpperCase() + pokemons[i].name.substr(1)}</h4>
 <span class="listName"> Tipo: ${pokemons[i].type}</span>
 <span class="listRarity"> Raridade: ${pokemons[i]["pokemon-rarity"]}</span>
</div>
</div>
</div>
`
        }
    } 
    */

 function filtrarTipo () {
    let teste = data.pokemon.filter((pokemon) => {
        
        return pokemon.type.includes("ground")
        }); 
        console.log(teste)
        return (teste)
 }   

 getPokeList();

const buttonClean = document.getElementById("btn-clean");
function cleanFilters() {
    window.location.reload();
}
buttonClean.addEventListener("click", cleanFilters);


