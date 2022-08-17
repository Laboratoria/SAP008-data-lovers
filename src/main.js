import {rickAndMorty} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

// ==== constantes e DOM's=====
const list = data.results;
const cardContainer = document.querySelector('#card-container');
const selectStatus = document.querySelector('#select-status');
const selectSpecies = document.querySelector('#select-species');
const selectGender = document.querySelector('#select-gender');
const selectOrder = document.querySelector('#select-order');

// ===== evento para mostrar os cards na tela ====
cardContainer.innerHTML = rickAndMorty.displayCards(list);

// ===== evento para filtrar por status ====
selectStatus.addEventListener('change', (event) => {
    const value = event.target.value;
    const listaFiltrada = rickAndMorty.filtrarPorStatus(list, value);
    //tive que acrescentar o data.results pois o filtrar por status agora recebe 2 parametros,
    //o data.results para que o filtro acesse os itens do objeto que estão no data e o value
    //valor da ação do usuário quando escolhe um dos status..
    document.querySelector('#card-container').innerHTML = listaFiltrada;
  
      
});

// ===== evento para filtrar por especie ====
selectSpecies.addEventListener('change', (event) => {
    const value = event.target.value;
    const listaFiltrada = rickAndMorty.filtrarPorEspecie(list, value);
    document.querySelector('#card-container').innerHTML = listaFiltrada;
    
});

// ===== evento para filtrar por genero ====
selectGender.addEventListener('change', (event) => {
    const value = event.target.value;
    const listaFiltrada = rickAndMorty.filtrarPorGenero(list, value);
    document.querySelector('#card-container').innerHTML = listaFiltrada;

});

// ===== evento para ordenar ====
selectOrder.addEventListener('change', (event) => {
    const value = event.target.value;
    window.alert(value);
});
