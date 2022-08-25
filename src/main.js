import {pokemonByType,pokemonByRarity,pokemonByEggs} from './data.js';
import data from './data/pokemon/pokemon.js';

// guarda os dados dos pokemons na let pokemon
let pokemons = data.pokemon;

function getAllPokemons(data){
    const pokeInfo = data.map((item) => {
      return `
      <div class="cards" id="cards">
            <img class="image-card" src="${item.img}" alt="imagem do Pokémon" loading = "lazy">
            <div class="info-cards">
            
            </div>
      </div>
      `
    }).join('')
  
    document.getElementById('pokemonList').innerHTML = pokeInfo;
  }

  getAllPokemons(pokemons);