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

    `<div>
        <div class="one-container">
            <div class= "second-container">
                <div class="three-container">
                    <p class= "one-line-card" ><b>${pokemon.num} ${pokemon.name}</b><br>
                        rarity:${pokemon["pokemon-rarity"]} Type:${pokemon.type}
                    </p>

                    <img class = "image-pokemon" src=${pokemon.img} />

                    <p class = "pokemon-stats" >max-cp: ${pokemon.stats["max-cp"]} max-hp:${pokemon.stats["max-hp"]} 
                        Height:${pokemon.size.height} Weight:${pokemon.size.weight}
                    </p>
                </div>

                <p class = "text-about">
                    About: ${pokemon.about}
                </p>

                <p class = "text-egg">egg: ${pokemon.egg} 
                    buddy distance km: ${pokemon["buddy-distance-km"]}
                </p>
            </div>
        </div>
    </div>
    `)
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
