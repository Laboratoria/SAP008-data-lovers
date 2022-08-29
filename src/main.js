import { rickAndMorty } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

// ======= Função de gerar templates ======
function displayCards(list) {
    const arrayResults = list.map((item) => {
        const template = `
        <div class="card">

            <img class="poster-img" src="${item.image}" alt="${item.name}">

            <ul class="card-text" style="list-style: none">                       
            <li>Name: ${item.name}</li>
            <li>Status: ${item.status}</li>
            <li>Species: ${item.species}</li>
            <li>Gender: ${item.gender}</li>
            <li>Location: ${item.origin.name}</li>
           
            </ul>                

        </div>
        `;
        return template;
    });
    return arrayResults.join("");
}

// ==== constantes e DOM's=====
const list = data.results;
const cardContainer = document.querySelector('#card-container');
const selectStatus = document.querySelector('#select-status');
const selectSpecies = document.querySelector('#select-species');
const selectGender = document.querySelector('#select-gender');
const selectOrder = document.querySelector('#select-order');
const percentage = document.querySelector('#percentage');
const searchForName = document.querySelector('#btn-search');
const reset = document.querySelector('#reset');

// ===== evento para mostrar os cards na tela ====
cardContainer.innerHTML = displayCards(list);

// ===== evento para filtrar por status ====
selectStatus.addEventListener('change', (event) => {
    const value = event.target.value;
    const listaFiltrada = rickAndMorty.filtrarPorStatus(list, value);
    const cards = displayCards(listaFiltrada);
    cardContainer.innerHTML = cards;

    // === evento para porcentagem ====
    const porcentagem = rickAndMorty.calcularPorcentagem(list.length, listaFiltrada.length);
    percentage.innerHTML = "Essa categoria contém " + porcentagem + "% dos personagens totais";

});

// ===== evento para filtrar por especie ====
selectSpecies.addEventListener('change', (event) => {
    const value = event.target.value;
    const listaFiltrada = rickAndMorty.filtrarPorEspecie(list, value);
    const cards = displayCards(listaFiltrada);
    cardContainer.innerHTML = cards;

    // === evento para porcentagem ====
    const porcentagem = rickAndMorty.calcularPorcentagem(list.length, listaFiltrada.length);
    percentage.innerHTML = "Essa categoria contém " + porcentagem + "% dos personagens totais";

});

// ===== evento para filtrar por genero ====
selectGender.addEventListener('change', (event) => {
    const value = event.target.value;
    const listaFiltrada = rickAndMorty.filtrarPorGenero(list, value);
    const cards = displayCards(listaFiltrada);
    cardContainer.innerHTML = cards;

    // === evento para porcentagem ====
    const porcentagem = rickAndMorty.calcularPorcentagem(list.length, listaFiltrada.length);
    percentage.innerHTML = "Essa categoria contém " + porcentagem + "% dos personagens totais";

});

// ===== evento para ordenar ====
selectOrder.addEventListener('change', (event) => {
    const value = event.target.value;
    const listaOrdenada = rickAndMorty.ordenar(list, value);
    const cards = displayCards(listaOrdenada);
    cardContainer.innerHTML = cards;
    percentage.innerHTML = ""; /*Adicionei essa string vazia para que apague o texto anterior (no caso as infos de porcentagem*/ 
});

// ===== evento para limpar filtros ====
reset.addEventListener('click', (event) => {
    location.reload(event);

});


// ===== evento para buscar por nome ====
searchForName.addEventListener('keyup', function (event) {
    const value = event.target.value;
    const listaFiltrada = rickAndMorty.buscarPorNome(list, value);
    const cards = displayCards(listaFiltrada);
    cardContainer.innerHTML = cards;
});
