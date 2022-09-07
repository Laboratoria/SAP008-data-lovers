import {pokemonShiny,pokemonAlphabeticalOrder,calculationPokemon,multFilterPokemon} from './data.js';
import data from './data/pokemon/pokemon.js';


const typeTranslated = 
{
    "water": "Água",
    "dragon": "Dragão",
    "electric": "Elétrico",
    "ghost": "Fantasma",
    "fire": "Fogo",
    "ice": "Gelo",
    "bug": "Inseto",
    "fighting": "Lutador",
    "normal": "Normal",
    "rock": "Pedra",
    "grass": "Planta",
    "psychic": "Psíquico",
    "ground": "Terra",
    "poison": "Venenoso",
    "flying": "Voador",
    "fairy": "Fada",
    "dark": "Sombrio"
  };

const shinyUrlImg = "https://www.serebii.net/pokemongo/pokemon/shiny/";
const selectEggs = document.getElementById("eggsFilter");
const selectRarity = document.getElementById("rarityFilter");
const selecType = document.getElementById("typeFilter");
const inputName = document.getElementById("nameFilter");
const selectOrder = document.getElementById("orderFilter");
const clearButton = document.getElementById("clearButton");
const calculationBar = document.getElementById('calculation');


// guardando os dados dos pokemons na let pokemon
let pokemons = data.pokemon;

//Dentro dessa função, adicionar mais dados que serão apresentados
//Por exemplo item.nome, item.evolution, item.candys...etc.
function printPokemons(data){

    const pokeInfo = data.map((item) => {

      let candys = "";

      if(item.evolution["next-evolution"]){
        candys = `<p class="info">Candys: ${item.evolution["next-evolution"].map(candys => candys["candy-cost"]).join(', ')}</p>`;
      }
      

      return `
      <div class="cards" id="cards">
        <section class="front-cards" id="frontCards">
        <p class="namePokemon">${item.name}</p>
            <picture>
              <img class="image-card" src="${item.img}" alt="imagem do Pokémon" loading = "lazy">
            </picture> 
            <div class="info-cards">
              <p class="info">${item.type.map(type => {
                return typeTranslated[type];
              })}</p>
              ${candys}
            </div>
          </section>
      </div>
      `
    }).join('')
  
    document.getElementById('pokemonList').innerHTML = pokeInfo;
  } 

printPokemons(pokemons);

selectEggs.addEventListener('change',function(e){
  printPokemons(multFilterPokemon(pokemons,"egg",e.target.value));
});

selectRarity.addEventListener('change',function(e){
  if(e.target.value == "shiny"){
    printPokemons(pokemonShiny(pokemons,shinyUrlImg))
  }else{
    printPokemons(multFilterPokemon(pokemons,"pokemon-rarity",e.target.value));
  }
});

selecType.addEventListener('change',function(e){
  const pokemonSelected = multFilterPokemon(pokemons,"type",e.target.value) 
  calculationBar.innerHTML = `${calculationPokemon(data.pokemon.length, pokemonSelected.length)}% 
  do total são do tipo ${e.target.value}`
  printPokemons(pokemonSelected);
})

inputName.addEventListener('input',function(){
  printPokemons(multFilterPokemon(pokemons,"name",inputName.value.toLowerCase()))
})

selectOrder.addEventListener('change',function(e){
  printPokemons(pokemonAlphabeticalOrder(pokemons,e.target.value));
});
 
clearButton.addEventListener("click",function(){
  window.location.reload(true);
})