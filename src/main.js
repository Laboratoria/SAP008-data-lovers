import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';

const cardsContainer = document.querySelector("#cardsContainer")

function gerarCards(cards){  
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
    
    cardsContainer.innerHTML += arrayCards
};
    
gerarCards(data.results);