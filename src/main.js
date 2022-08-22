import { filterByRegion } from "./data.js";
import { filterByType } from "./data.js";
import data from "./data/pokemon/pokemon.js";

//.log(example, data);

//const btnMain = document.getElementById("button-main");
const btnWorld = document.getElementById("button-world");
const btnKanto = document.getElementById("button-kanto");
const btnJohto = document.getElementById("button-johto");
const cards = document.getElementById("cards");
const everyPokemon = data.pokemon;
const select = document.getElementById("selectType");


//templates dos cards//
const createCards = listPokemon => {
    let infoPokemon = listPokemon.map((pokemon) =>

    `<div class="one-container">

        <div class= "second-container">

            <div class="third-container">
                <p class= "text-name-number" >
                 rarity:${pokemon["pokemon-rarity"]}
                <b>${pokemon.num} ${pokemon.name.toUpperCase()}</b>
                 type:${pokemon.type}
                </p>

                <img class = "image-pokemon" src=${pokemon.img} />

                <p class = "text-pokemon-stats" >max-cp: ${pokemon.stats["max-cp"]} max-hp:${pokemon.stats["max-hp"]} 
                    height:${pokemon.size.height} weight:${pokemon.size.weight}
                </p>
            </div>

            <p class = "text-about">
                About: ${pokemon.about}
            </p>
            <p class = "text-egg">egg: ${pokemon.egg}. 
                buddy distance km: ${pokemon["buddy-distance-km"]}
            </p>
            <hr>
            <div>
                <p class="text-resistant">
                resistant: ${pokemon.resistant}
                weaknesses: ${pokemon.weaknesses}
                </p>
                <p class="attack-defense-stamina">
                base attack:${pokemon.stats["base-attack"]}
                base defense:${pokemon.stats["base-defense"]}
                base stamina:${pokemon.stats["base-stamina"]}
                </p>
            </div>


        </div>
    </div>
    `)
    return infoPokemon.join(" ")
}

let pokemonsToBeShow= []
//Botão Região kanto//
btnKanto.addEventListener("click", function () {
    let result = filterByRegion(everyPokemon, "kanto")
    let infoKanto = createCards(result)
    cards.innerHTML = infoKanto
    pokemonsToBeShow = infoKanto
    console.log(infoKanto)
});

//Botão da Região Johto//
btnJohto.addEventListener("click", function () {
    let result = filterByRegion(everyPokemon, "johto")
    let infoJohto = createCards(result)
    cards.innerHTML = infoJohto;
    pokemonsToBeShow = infoJohto
    console.log(infoJohto)
});

//Cards de todos os pokemon na tela//
btnWorld.addEventListener("click", function () {
    let infoPokemons = createCards(everyPokemon)
    cards.innerHTML = infoPokemons
    pokemonsToBeShow= infoPokemons 
});

select.addEventListener("change", function(){
    let result = filterByType(pokemonsToBeShow,"grass")
    let pokeGrass = createCards(result)
    cards.innerHTML = pokeGrass;
    console.log (pokeGrass)


//     const selectElement = document.querySelector('.ice-cream');

// selectElement.addEventListener('change', (event) => {
//   const result = document.querySelector('.result');
//   result.textContent = `You like ${event.target.value}`;
// })


      // const pokemons = []
        // const pokemonsByRegion= filterByRegion(pokemons, "kanto")
        // const filteredRegionNType = filterByType(pokemonsByRegion, "grass") 
    console.log(select.value)
})
