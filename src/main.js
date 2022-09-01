import { filterByRegion } from "./data.js";
import { filterByType } from "./data.js";
import { sortBy } from "./data.js";
import { calcPercentage } from "./data.js";
import data from "./data/pokemon/pokemon.js";
import { filterSearch } from "./data.js";

//.log(example, data);

const btnReset = document.getElementById("button-reset");
const btnWorld = document.getElementById("button-world");
const btnKanto = document.getElementById("button-kanto");
const btnJohto = document.getElementById("button-johto");
const cards = document.getElementById("cards");
const everyPokemon = data.pokemon;
const select = document.getElementById("selectType");
let selectOrder = document.getElementById("select-cp");
const statsType = document.getElementById("statsType")
const inputSearch = document.getElementById("input-search")



//botão de reset
btnReset.addEventListener("click",(event) => {
    location.reload(event);
})

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


let pokemonsToBeShown = []
let sortpokemon = []

//Botão Região kanto//
btnKanto.addEventListener("click", function () {
    document.getElementById("button-kanto").style.background="blue"
    document.getElementById("button-johto").style.background="white"
    document.getElementById("button-world").style.background="white"
    document.querySelector(".inf-world-pokemon").style.display="none"
    document.querySelector(".btn-select").style.display="block"
    document.getElementById("section-logo").style.display="none"
    let result = filterByRegion(everyPokemon, "kanto")
    let infoKanto = createCards(result)
    cards.innerHTML = infoKanto
    pokemonsToBeShown = result
    sortpokemon = result
});

//Botão da Região Johto//
btnJohto.addEventListener("click", function () {
    document.getElementById("button-johto").style.background="blue"
    document.getElementById("button-kanto").style.background="white"
    document.getElementById("button-world").style.background="white"
    document.querySelector(".inf-world-pokemon").style.display="none"
    document.querySelector(".btn-select").style.display="block"
    let result = filterByRegion(everyPokemon, "johto")
    let infoJohto = createCards(result)
    cards.innerHTML = infoJohto;
    pokemonsToBeShown = result
    sortpokemon = result
});

//Cards de todos os pokemon na tela//
btnWorld.addEventListener("click", function () {
    document.getElementById("button-world").style.background="blue"
    document.getElementById("button-kanto").style.background="white"
    document.getElementById("button-johto").style.background="white"
    //alterando o display da imagem//
    document.querySelector(".inf-world-pokemon").style.display="none"
    document.querySelector(".btn-select").style.display="block"
    let infoPokemons = createCards(everyPokemon)
    cards.innerHTML = infoPokemons
    pokemonsToBeShown = everyPokemon
    sortpokemon = everyPokemon
});

//Filtro por tipo//

select.addEventListener("change", function () {
    const type = select.value
    const resultType = filterByType(pokemonsToBeShown, type)
    const pokeType = createCards(resultType)
    cards.innerHTML = pokeType;
    sortpokemon = resultType
    //PROBLEMA: Usar os 251 como parâmetro, e não usar o array por região
    let typePercentage = calcPercentage(pokemonsToBeShown.length,resultType.length)
    //statsType.innerHTML = typePercentage + "% dos Pokémon são desse tipo!"
    //Arredondando
    statsType.innerHTML = Math.round(typePercentage) + "% dos Pokémon são desse tipo!"
});

//Ordernar//
selectOrder.addEventListener("change", function () {
    let maxCp = selectOrder.value
    let result = sortBy(sortpokemon, maxCp)
    let pokeCpHp = createCards(result)
    cards.innerHTML = pokeCpHp;
   
})

inputSearch.addEventListener("input", () => {
    let text = inputSearch.value
    let textlowercase = text.toLowerCase()
    //console.log(text)
    //console.log(textlowercase)
    let result = (filterSearch(everyPokemon, textlowercase)); 
    cards.innerHTML = createCards(result) 
    //console.log(result)
  });

  
