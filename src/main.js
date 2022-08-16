import {filtrarPorEspecie} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

function displayResults(resultsList) { //Essa function recebe uma lista para processar.
    const arrayResults = resultsList.map((item) => {
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
    document.querySelector('.card-container').innerHTML = arrayResults.join("")
}

displayResults(data.results);

document.querySelector('#select-status').addEventListener('change', (event) => {
    const value = event.target.value;
    window.alert(value);
});



document.querySelector('#select-species').addEventListener('change', (event) => {
    const value = event.target.value;
    
    const listaFiltrada = filtrarPorEspecie(value); // Criamos uma constante onde ela recebeu o valor da funçào que está no data.
    //O .value no final, estamos indicando que essa constante tem que receber o valor atribuido ao botão (const value), que sera disparado 
    //quando o usuario escolher no select qual a espécie. Por fim colocamos displayResults(listafiltrada) para mostrar o resultado final
    // dessa lista filtradagit 
    
    displayResults(listaFiltrada);
});

document.querySelector('#select-gender').addEventListener('change', (event) => {
    const value = event.target.value;
    window.alert(value);
});

document.querySelector('#select-order').addEventListener('change', (event) => {
    const value = event.target.value;
    window.alert(value);
})


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



