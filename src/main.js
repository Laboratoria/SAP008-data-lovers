import {calCp, filterGeneration, filterType,sortData} from './data.js';
import data from './data/pokemon/pokemon.js';

const arrayPokemon=data.pokemon;


//-----------------CHAMANDO A FUNÇÃO PRINTCARDS QUANDO RECARREGAR A PÁGINA----------- 
window.addEventListener("load", ()=>printCards(arrayPokemon));  
//----------------CHAMANDO A FUNÇÃO SEARCHPOKEMON QUANDO DIGITAR ALGO NO INPUT ID SEARCH----------------
document.querySelector("#search").addEventListener("keyup", searchPokemon);
// -------------------CHAMANDO FUNÇÃO TYPEFILTER NO CLICK-----------------------
// document.getElementById("filtertype").addEventListener("click",()=>printCards(filterTyper(arrayPokemon, document.getElementById("").value)));
//----------------------CHAMANDO FUNÇÃO GENERATIONFILTER NO CLICK------------------
// document.getElementById("filtergeneration").addEventListener("click",()=>printCards(filterGeneration(arrayPokemon, document.getElementById("filtergeneration").value )));

// console.log(sortData(arrayPokemon))
//-----------------------BUSCAR POKÉMON PELO NOME-----------------------------
function searchPokemon(){
    let searchFor=document.querySelector("#search").value.toLowerCase()
    printCards(arrayPokemon.filter((key) => key.name.includes(searchFor)))
}
//------------------------------PRINT DE CARDS NA DIV CARDS----------------------------------
function printCards(array) {
    document.querySelector("#cards").innerHTML = array.map((key) =>
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

