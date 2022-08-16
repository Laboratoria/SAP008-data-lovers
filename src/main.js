import {rickAndMorty} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

// ==== constantes =====
const list = data.results;
const cardContainer = document.querySelector('.card-container');

// ===== DOM para mostrar os cards na tela ====
cardContainer.innerHTML = rickAndMorty.displayCards(list);

// ===== DOM para filtrar por status ====
const btnFilterStatus = document.querySelector('#select-status');
btnFilterStatus.addEventListener('change', (event) => {
    const value = event.target.value;
    const listaFiltrada = rickAndMorty.filtrarPorStatus(value);
    cardContainer.innerHTML = rickAndMorty.displayCards(listaFiltrada);

});

// ===== DOM para filtrar por especie ====
document.querySelector('#select-species').addEventListener('change', (event) => {
     
    const value = event.target.value;
    const listaFiltrada = rickAndMorty.filtrarPorEspecie(value);
    cardContainer.innerHTML = rickAndMorty.displayCards(listaFiltrada);
    
    //O .value no final, estamos indicando que essa constante tem que receber o valor atribuido ao botão (const value), que sera disparado 
    //quando o usuario escolher no select qual a espécie. 
     // Criamos uma constante onde ela recebeu o valor da funçào que está no data. 

});

// ===== DOM para filtrar por genero ====
document.querySelector('#select-gender').addEventListener('change', (event) => {
    const value = event.target.value;
    const listaFiltrada = rickAndMorty.filtrarPorGenero(value);
    cardContainer.innerHTML = rickAndMorty.displayCards(listaFiltrada);

});

// ===== DOM para ordenar ====
document.querySelector('#select-order').addEventListener('change', (event) => {
    const value = event.target.value;
    window.alert(value);
});


/* Queremos que apareça na tela somente os personagens que são da especie humana.

/*função para um personagem

function displayResults(resultsList) {
    const item = resultsList[0];
        const template = `
        <div class="poster">
            <ul>
            <li>
            <img class="poster-img" src="${item.image}" alt="${item.name}">
            
            </li>            
            <li>Name: ${item.name}</li>
            <li>Status: ${item.status}</li>
            <li>Species: ${item.species}</li>
            <li>Gender: ${item.gender}</li>
            <li>Location: ${item.origin.name}</li>
           
            </ul>                

        </div>
        `;
    document.querySelector('.catalogue').innerHTML = template;
}

displayResults(data.results);

  */



