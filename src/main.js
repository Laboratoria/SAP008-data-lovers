import { filtrarGenero, filtrarNome, filtrarEspecie, filtrarOrigin, filtrarStatus} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

//document.getElementById("enviar").addEventListener("click", filtrarGenero )

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
}
    
gerarCards(data.results);