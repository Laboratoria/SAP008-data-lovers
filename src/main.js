import data from './data/pokemon/pokemon.js';

import { menuSelectTipo } from './data.js';

const tipo = document.getElementById("ordenar-tipo");
tipo.addEventListener("click", tipoPokemon);

function tipoPokemon(event) {
    event.preventDefault();
    const buscarTipo = document.getElementById("type").value;
    const pokemonTipo = menuSelectTipo(buscarTipo, data.pokemon);
    const calculo = calculoTipo(buscarTipo, data.pokemon).toFixed(2); //casas usadas depois da virgula
    const textPercent = `<p><strong>Os Pokémons de tipo ${buscarTipo} representam ${calculo} % da quantidade total de Pokémons.</strong></p>`
    divCalculo.innerHTML = textPercent;
    mostrarPokemon(pokemonTipo);
}
