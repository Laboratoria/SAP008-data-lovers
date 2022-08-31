import {
  filtrar,
  ordenar,
  calculoAgregado,

} from "./data.js";

import data from "./data/rickandmorty/rickandmorty.js";

const rickandmorty = data.results;

criaCard(rickandmorty);

function criaCard(personagens) {
  const printarCard = personagens.map((personagem) => {
    const criandoCard = `
        <div class = "cardsBox">
            <div class = "imagem">
             <img class = "imagemCard" src="${personagem.image}" alt="Imagem personagem">
             <div class = "nameCard">${personagem.name}</div>
            </div>
            <ul class = "textoCard">
             <li>Espécie: ${personagem.species}</li>
             <li>Gênero: ${personagem.gender}</li>
             <li>Status: ${personagem.status}</li>
            </ul>
        </div>
        `;
    return criandoCard;
  });

  document.querySelector("#exibirCards").innerHTML = printarCard.join("");
}

document.querySelector("#especie").addEventListener("change", (event) => {
  const valor = event.target.value;
  const especieFiltrada = filtrar(rickandmorty, "species", valor);

  const calculo = calculoAgregado(rickandmorty.length, especieFiltrada.length);
  document.getElementById("exibirCalculo").innerHTML =
    "Essa categoria representa " + calculo + "% dos personagens";
 
  criaCard(especieFiltrada);
});

document.querySelector("#genero").addEventListener("change", (event) => {
  const valor = event.target.value;
  const generoFiltrado = filtrar(rickandmorty, "gender", valor);

  const calculo = calculoAgregado(rickandmorty.length, generoFiltrado.length);
  document.getElementById("exibirCalculo").innerHTML =
    "Essa categoria representa " + calculo + "% dos personagens";

  criaCard(generoFiltrado);
});

document.querySelector("#status").addEventListener("change", (event) => {
  const valor = event.target.value;
  const statusFiltrado = filtrar(rickandmorty, "status", valor);

  const calculo = calculoAgregado(rickandmorty.length, statusFiltrado.length);
  document.getElementById("exibirCalculo").innerHTML =
    "Essa categoria representa " + calculo + "% dos personagens";

  criaCard(statusFiltrado);
});

document.querySelector("#ordemalfabetica").addEventListener("change", (event) => {
  const valor = event.target.value;
  const ordem = ordenar(rickandmorty, valor);
  const calculo = calculoAgregado(rickandmorty.length, ordem.length);
  document.getElementById("exibirCalculo").innerHTML =
    "Essa categoria representa " + calculo + "% dos personagens";

  criaCard(ordem);
});
