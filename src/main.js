import { calculoAgregado, sortCharacters } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const cardsContainer = document.querySelector("#cardsContainer")
const characters = data.results;

function gerarCards(cards) {
  const arrayCards = cards.map((item) => {
    const cardsList = `
        <div class="cards">
            <img class="cardsImg" src="${item.image}" alt="${item.name}">
            <ul class="cardText" style="list-style: none">                       
            <li>Name: ${item.name}</li>
            <li>Status: ${item.status}</li>
            <li>Species: ${item.species}</li>
            <li>Gender: ${item.gender}</li>
            <li>Location: ${item.origin.name}</li>
            </ul>                
        </div>
        `;
    return cardsList;

  }).join("")

  cardsContainer.innerHTML = arrayCards
}
gerarCards(characters);

const selectOrderAZ = document.querySelector("#order");
const printAZOrdered = () => {
  const orderAZ = selectOrderAZ.value;
  const resultAZ = sortCharacters(characters, orderAZ);
  gerarCards(resultAZ)
}
selectOrderAZ.addEventListener("change", printAZOrdered);

const selectGenero = document.querySelector("#opcoesGenero");
const generoFiltrado = () => {
  const gender = selectGenero.value
  const resultadoGenero = characters.filter(function (character) {
    return character.gender === gender
  });
  const calculo = calculoAgregado(characters.length, generoFiltrado.length);
  document.getElementById("exibirCalculo").innerHTML =
    "Essa categoria representa " + calculo + "% dos personagens";

  gerarCards(resultadoGenero)
};
selectGenero.addEventListener("change", generoFiltrado);

const selectEspecie = document.querySelector("#opcoesEspecie");
const especieFiltrada = () => {
  const species = selectEspecie.value
  const resultadoEspecie = characters.filter(function (character) {
    return character.species === species
  })
  gerarCards(resultadoEspecie)
};
selectEspecie.addEventListener("change", especieFiltrada);

const selectStatus = document.querySelector("#opcoesStatus");
const statusFiltrado = () => {
  const status = selectStatus.value
  const resultadoStatus = characters.filter(function (character) {
    return character.status === status
  })
  gerarCards(resultadoStatus)
};
selectStatus.addEventListener("change", statusFiltrado);


