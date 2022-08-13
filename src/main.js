//import {results} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

function displayResults(resultsList) {
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


//printar printar os dados do result[0] em um card

//document.querySelector('.catologue').innerHtml = data.results[0]

//transformar data.results[0] em string -> criar uma função para transformar o array em string para
//eu conseguir usar 

//criar uma função para printar os dados do results[0] no .catologue e dentro dessa função eu vou 
//transformar também esse array em string

/*function displayResults() {
    const item = 
}

//displayResults(data.results)*/
