// import { example } from './data.js';
import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';

const content = document.querySelector('#cards-main'); // impressão dos cards
const btnFilter = document.querySelector('#btn-filtro'); // botão de filtro
const medalSelector = document.querySelector('#medalhas') // imputs de medalha

const arrayAthletes = data.athletes
let arrayReturn = []
let medalicon = ""

// funções de filtragem
function boxingFilter(atleta) {
    return atleta.sport == "Boxing";
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
// chamamento da função anterior de atletas
boxingTest();

// evento para que quando o botão de filtrar for clicado irá chamar as funções respectivas
btnFilter.onclick = (event) => {
    if (medalSelector.value == 'all') {
        boxingTest();
    }
    if (medalSelector.value == 'gold') {
        arrayReturn = arrayAthletes.filter(goldFilter)
        medalicon = "🥇";
        cardsPrint();
    }
    else if (medalSelector.value == 'silver') {
        arrayReturn = arrayAthletes.filter(silverFilter)
        medalicon ="🥈";
        cardsPrint();
    }
    else if (medalSelector.value == 'bronze') {
        arrayReturn = arrayAthletes.filter(bronzeFilter)
        medalicon = "🥉";
        cardsPrint();
    }
}

// função para impressão dos cards
function cardsPrint() {
    const cards = arrayReturn.map((element) => {
        return `
            <div class="card-atleta" id="card-atleta">
                <div class="card-efeito" >
                    <div class="card-frente">
      
                    </div>
                    <div class="card-verso">    
                        <div class="atributos-atleta">
                            <p class="nome"><strong>Nome:</strong> ${element.name}</p>
                            <p class="genero"><strong>Gênero:</strong> ${element.gender}</p>
                            <p class="esporte"><strong>Modalidade:</strong> ${element.sport}</p>
                            <p class="pais"><strong>País:</strong> ${element.team}</p>
                            <p class="medalha"><strong>Medalha:</strong> ${element.medal} ${medalicon}</p>
                            <p class="evento"><strong>Categoria:</strong> ${element.event}</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    }).join("")
    content.innerHTML = cards
    console.log(cards)
}