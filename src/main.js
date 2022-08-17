import {filterByRegion} from "./data.js";
import data from "./data/pokemon/pokemon.js";

//.log(example, data);

const btnMain = document.getElementById("button-main");
const btnWorld = document.getElementById("button-world");
const btnKanto = document.getElementById("button-kanto");
const btnJohto = document.getElementById("button-johto");
const cards = document.getElementById("cards");
const everyPokemon = data.pokemon;

const createCards = listPokemon => {
   let infoPokemon = listPokemon.map((pokemon) => `<b>Name:${pokemon.name}</b>
  <div> ${pokemon.about} </div>
   <div>type:${pokemon.type}</div>
   <p>Oi</p>

   `);
return infoPokemon;
}
   
btnKanto.addEventListener("click", function () {
 let result = filterByRegion (everyPokemon, "kanto")
 let infoKanto = createCards (result)

    cards.innerHTML = infoKanto;
    console.log (infoKanto)
});

btnJohto.addEventListener("click", function () {
  cards.innerHTML = listJohto;
});

btnWorld.addEventListener("click", function () {
    cards.innerHTML = every;
  });

const every= everyPokemon
.map((element) => element.name)

  

const listJohto = everyPokemon
  .filter((element) => element.generation.name === "johto")
  .map((element) => element.name);
