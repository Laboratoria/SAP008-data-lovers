import {pokemonByType,pokemonByRarity,pokemonByEgg,pokemonShiny, pokemonByName, pokemonAlphabeticalOrder} from './data.js';
import data from './data/pokemon/pokemon.js';

const shinyUrlImg = "https://www.serebii.net/pokemongo/pokemon/shiny/";
const selectEggs = document.getElementById("eggsFilter");
const selectRarity = document.getElementById("rarityFilter");
const selecType = document.getElementById("typeFilter");
const inputName = document.getElementById("nameFilter");
const selectOrder = document.getElementById("orderFilter");
const clearButton = document.getElementById("clearButton");


// guardando os dados dos pokemons na let pokemon
let pokemons = data.pokemon;

//Dentro dessa função, adicionar mais dados que serão apresentados
//Por exemplo item.nome, item.evolution, item.candys...etc.
function printPokemons(data){
    const pokeInfo = data.map((item) => {
      return `
      <div class="cards" id="cards">
      <section class="front-cards" id="frontCards">
            <img class="image-card" src="${item.img}" alt="imagem do Pokémon" loading = "lazy">
            <div class="info-cards">
            </div>
            </section>
      </div>
      `
    }).join('')
  
    document.getElementById('pokemonList').innerHTML = pokeInfo;
  } 

printPokemons(pokemons);

selectEggs.addEventListener('change',function(e){
  printPokemons(pokemonByEgg(pokemons, e.target.value));
});

selectRarity.addEventListener('change',function(e){
  if(e.target.value == "shiny"){
    printPokemons(pokemonShiny(pokemons,shinyUrlImg))
  }else{
    printPokemons(pokemonByRarity(pokemons,e.target.value));
  }
});

selecType.addEventListener('change',function(e){
  printPokemons(pokemonByType(pokemons,e.target.value));
})

inputName.addEventListener('input',function(){
  printPokemons(pokemonByName(pokemons,inputName.value.toLowerCase()))
})

selectOrder.addEventListener('change',function(){
  printPokemons(pokemonAlphabeticalOrder(pokemons));
});
 
clearButton.addEventListener("click",function(){
  window.location.reload(true);
})
