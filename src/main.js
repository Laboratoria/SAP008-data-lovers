import data from "./data/pokemon/pokemon.js";

//import {filterData} from "./data.js";

// COMENTÁRIO htmELLEN =) Abaixo deixei todos usando o Byid pra tdo usar o mesmo seletor
const result = document.getElementById("result");
const searchName = document.getElementById("findPokemon");
const selectType = document.getElementById("pokeType");
const selectRarity = document.getElementById("rarity");
const buttonSearch = document.getElementById("btn-find");
const buttonClean = document.getElementById("btn-clean");
//const searchInput = document.querySelector("#searchPokemon") -> Esse estava no seu e eu não achei oq seria,depois vc valida...

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

// Function filter types/rarity/names
 function filterPokemon() {
    result.innerHTML = ""
    const dados = data.pokemon.filter((pokemon) => {

       if (selectRarity.value != "") {
        if (!pokemon['pokemon-rarity'].includes(selectRarity.value)){
            return false
        }
       } 
       if (selectType.value != "") {
        if (!pokemon.type.includes(selectType.value)){
            return false
        }
       } 
       if (searchName.value != "") {
        if (!pokemon.name.includes(searchName.value)){
            return false
        }
       }
        return true
        }); 
        return dados
        
 }   
 printCards() ;

 // Eventlistener 
 selectRarity.addEventListener("change", printCards) // Se manter o butão de pesquisar, mudamos pro click
 selectType.addEventListener("change", printCards) // Se manter o butão de pesquisar, mudamos pro click
 //buttonSearch.addEventListener("click", printCards) -> COMENTÁRIO Htm Ellen =) Retirar botão de pesquisa?
 searchName.addEventListener("keypress",printCards) // Conforme digitamos ele já vai aparecendo na tela as sugestões.... 

//  Function clean search
buttonClean.addEventListener("click", clean); 

function clean (){
    selectType.value="";
    selectRarity.value="";
    searchName.value="";
    printCards(data.pokemon);
}
