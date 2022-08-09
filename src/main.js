import {filterData} from './data.js';

import data from './data/pokemon/pokemon.js';

const arrayPokemon=data.pokemon;

//-----------------CHAMANDO A FUNÇÃO PRINTCARDS QUANDO RECARREGAR A PÁGINA----------- 
window.addEventListener("load", printCards(arrayPokemon));  

//console.log(arrayPokemon)

//filterData(arrayPokemon, "ice")

//----------------CHAMANDO A FUNÇÃO SEARCHPOKEMON QUANDO DIGITAR ALGO NO INPUT ID SEARCH----------------
document.getElementById("search").addEventListener("keyup", searchPokemon);

//-----------------------FUNÇÃO QUE BUSCA O POKÉMON PELO NOME-----------------------------
function searchPokemon(){
    let searchFor=document.getElementById("search").value.toLowerCase()
    let searchResult = arrayPokemon.filter((key) => key.name.includes(searchFor))
    printCards(searchResult)
}

function printCards(array) {
    document.getElementById("cards").innerHTML = array.map(
      (key) =>`
      <div class="cardPokemon">
      <p class="registro" >${key.num}</p>
      <h1>${key.name}</h1>
      <img class="imgCard" src="${key.img}" alt="${key.name}">
      <p class="tipo" >${key.type.join(" ")}</p>
      </div>
      `
      ).join("")
}