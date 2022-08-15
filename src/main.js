import {filterGeneration, filterType} from './data.js';
import data from './data/pokemon/pokemon.js';

const arrayPokemon=data.pokemon;

//-----------------CHAMANDO A FUNÇÃO PRINTCARDS QUANDO RECARREGAR A PÁGINA----------- 
printCards(arrayPokemon)
// window.addEventListener("load", printCards(arrayPokemon));  
//----------------CHAMANDO A FUNÇÃO SEARCHPOKEMON QUANDO DIGITAR ALGO NO INPUT ID SEARCH----------------
document.getElementById("search").addEventListener("keyup", searchPokemon);
// -------------------CHAMANDO FUNÇÃO TYPEFILTER NO CLICK-----------------------
// document.getElementById("filtertype").addEventListener("click", typeFilter);
//----------------------CHAMANDO FUNÇÃO GENERATIONFILTER NO CLICK------------------
// document.getElementById("filtergeneration").addEventListener("click", generationFilter);

//console.log(arrayPokemon.sort())
//-----------------------BUSCAR POKÉMON PELO NOME-----------------------------
function searchPokemon(){
    let searchFor=document.getElementById("search").value.toLowerCase()
    printCards(arrayPokemon.filter((key) => key.name.includes(searchFor)))
}
/* // -------------------------FILTRAR POR TIPO----------------------------------
function typeFilter(){
    printCards(filterType(arrayPokemon, document.getElementById("filtertype").value))
}
// -------------------------FILTRAR POR GERAÇÃO----------------------------------
function generationFilter(){
    printCards(filterGeneration(arrayPokemon, document.getElementById("filtergeneration").value ))
} */
//------------------------------PRINT DE CARDS NA DIV CARDS----------------------------------
function printCards(array) {
    document.getElementById("cards").innerHTML = array.map((key) =>
        `
        <div class="cardPokemon">
        <p class="registro" >${key.num}</p>
        <h1>${key.name}</h1>
        <img class="imgCard" src="${key.img}" alt="${key.name}">
        <p class="tipo" >${key.type.join(" ")}</p>
        </div>
        `
    ).join("")
}
