import { filterByRegion } from "./data.js";
import data from "./data/pokemon/pokemon.js";

//.log(example, data);

const btnMain = document.getElementById("button-main");
const btnWorld = document.getElementById("button-world");
const btnKanto = document.getElementById("button-kanto");
const btnJohto = document.getElementById("button-johto");
const cards = document.getElementById("cards");
const everyPokemon = data.pokemon;

//templates dos cards//
const createCards = listPokemon => {
    let infoPokemon = listPokemon.map((pokemon) =>
    `<h3>Number:${pokemon.num} Name:${pokemon.name}</h3>
    <img src=${pokemon.img} />
    <p>Pokemon-rarity:${pokemon["pokemon-rarity"]} Type:${pokemon.type}</p>
    <p>Height:${pokemon.size.height} Weight:${pokemon.size.weight} <p>
    <p>${pokemon.about} </p>
    `);
    return infoPokemon.join(" ")
}



//Botão Região kanto//
btnKanto.addEventListener("click", function () {
    let result = filterByRegion(everyPokemon, "kanto")
    let infoKanto = createCards(result)
    cards.innerHTML = infoKanto
    console.log(infoKanto)
});

//Botão da Região Johto//
btnJohto.addEventListener("click", function () {
    let result = filterByRegion(everyPokemon, "johto")
    let infoJohto = createCards(result)
    cards.innerHTML = infoJohto;
    console.log(infoJohto)
});

//Cards de todos os pokemon na tela//
btnWorld.addEventListener("click", function () {
    let infoPokemons = createCards(everyPokemon)
    cards.innerHTML = infoPokemons
});