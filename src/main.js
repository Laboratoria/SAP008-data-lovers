import {rickAndMorty} from './data.js';
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

// ===== evento para mostrar os cards na tela ====
cardContainer.innerHTML = displayCards(list);

// ===== evento para filtrar por status ====
selectStatus.addEventListener('change', (event) => {
    const value = event.target.value;
    const listaFiltrada = rickAndMorty.filtrarPorStatus(list, value);
    const cards = displayCards(listaFiltrada);    
    document.querySelector('#card-container').innerHTML = cards;     

});

// ===== evento para filtrar por especie ====
selectSpecies.addEventListener('change', (event) => {     
    const value = event.target.value;
    const listaFiltrada = rickAndMorty.filtrarPorEspecie(list, value);
    const cards = displayCards(listaFiltrada);
    document.querySelector('#card-container').innerHTML = cards;   

});

// ===== evento para filtrar por genero ====
selectGender.addEventListener('change', (event) => {
    const value = event.target.value;
    const listaFiltrada = rickAndMorty.filtrarPorGenero(list, value);
    const cards = displayCards(listaFiltrada);
    document.querySelector('#card-container').innerHTML = cards;

});

// ===== evento para ordenar ====
selectOrder.addEventListener('change', (event) => {
    const value = event.target.value;
    window.alert(value);
});