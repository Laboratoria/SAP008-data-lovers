import { filterByRegion } from './data.js';
import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon
const btnMain = document.getElementById("button-main");
const btnWorld = document.getElementById("button-world");
const btnKanto = document.getElementById("button-kanto");
const btnJohto = document.getElementById("button-johto");
const cards = document.getElementById("cards");

const criarCards = listPokemon => {
    let namesByPokemon = listPokemon.map(pokemon => pokemon.name)
    return namesByPokemon
}

btnKanto.addEventListener("click", function () {
    let result = filterByRegion (pokemons, "kanto")
    let names = criarCards (result)
    console.log(names)
    cards.value = names
});

