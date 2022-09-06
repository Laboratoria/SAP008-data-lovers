// import { example } from './data.js';
import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';

const content = document.querySelector('#cards-main'); // impressão dos cards
const btnFilter = document.querySelector('#btn-filtro'); // botão de filtro
const medalSelector = document.querySelector('#medalhas'); // imputs de medalha
const btnAthletics = document.querySelector('#btn-atletismo'); // botão atletismo
const btnWrestling = document.querySelector('#btn-luta'); // botão luta
const btnBoxing = document.querySelector('#btn-boxe');
const btnEquestrianism = document.querySelector('#btn-hipismo');

const arrayAthletes = data.athletes
let arrayReturn = []
let medalicon = ""

function dualFilter( esporte, medal) {
   const modalidade = esporte.sport
   const medalha = medal.medal 
}

// funções de filtragem
function athleticsFilter(atleta) {
    return atleta.sport == "Athletics";
}

function wrestlingFilter(atleta) {
    return atleta.sport == "Wrestling";
}

function boxingFilter(atleta) {
    return atleta.sport == 'Boxing';
}

function equestrianismFilter(atleta) {
    return atleta.sport == "Equestrianism";
}
 
function goldFilter(atleta) {
    return  atleta.medal == 'Gold';
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
    cardsPrint();
}
// chamamento da função anterior de atletas
//boxingTest();

// evento para que quando o botão de filtrar for clicado irá chamar as funções respectivas
btnFilter.onclick = (event) => {
   /* if (medalSelector.value == 'all') {
        dualFilter(123,321)
        console.log(dualFilter)
        
    }*/
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

btnAthletics.onclick = (event) => {
    arrayReturn = arrayAthletes.filter(athleticsFilter)
    cardsPrint();
}


btnWrestling.onclick = (event) => {
    arrayReturn = arrayAthletes.filter(wrestlingFilter)
    cardsPrint();
}

btnBoxing.onclick = (event) => {
    arrayReturn = arrayAthletes.filter(boxingFilter)
    cardsPrint();
}

btnEquestrianism.onclick = (event) => {
    arrayReturn = arrayAthletes.filter(equestrianismFilter)
    cardsPrint();
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
    
}