// import { example } from './data.js';
import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';

const content = document.querySelector('.cards-main'); // impressão dos cards
const btnFilter = document.querySelector('#btn-filtro'); // botão de filtro
const medalSelector = document.querySelector('#medalhas') // imputs de medalha

const arrayAthletes = data.athletes
let arrayReturn = []

// funções de filtragem
function boxingFilter(atleta) {
    return atleta.sport == 'Boxing';
    // return atleta.sport
}
function goldFilter(atleta) {
    return atleta.sport == 'Boxing' && atleta.medal == 'Gold';
    // return atleta.sport && atleta.medal == 'Gold'
}
function silverFilter(atleta) {
    return atleta.sport == 'Boxing' && atleta.medal == 'Silver';
}
function bronzeFilter(atleta) {
    return atleta.sport == 'Boxing' && atleta.medal == 'Bronze';
}

// função será chamada assim que a página for carregada
function boxingTest() {
    arrayReturn = arrayAthletes.filter(boxingFilter)
    console.log(arrayReturn)
    cardsPrint();
}
// chamamento da função anterior 
boxingTest();

// evento para que quando o botão de filtrar for clicado irá chamar as funções respectivas
btnFilter.onclick = (event) => {
    if (medalSelector.value == 'all') {
        boxingTest();
    }
    if (medalSelector.value == 'gold') {
        arrayReturn = arrayAthletes.filter(goldFilter)
        cardsPrint();
    }
    else if (medalSelector.value == 'silver') {
        arrayReturn = arrayAthletes.filter(silverFilter)
        cardsPrint();
    }
    else if (medalSelector.value == 'bronze') {
        arrayReturn = arrayAthletes.filter(bronzeFilter)
        cardsPrint();
    }

}

// função para impressão dos cards
function cardsPrint() {
    const cards = arrayReturn.map((element) => {
        return `
            <div class="card-atleta" id="card-atleta">
                <div class="atributos-atleta">
                    <p class="nome">${element.name}</p>
                    <p class="genero">${element.gender}</p>
                    <p class="esporte">${element.sport}</p>
                    <p class="pais">${element.team}</p>
                    <p class="medalha">${element.medal}</p>
                    <p class="medalha">${element.event}</p>
                </div>
            </div>
        `
    }).join("")
    content.innerHTML = cards
    console.log(cards)
}