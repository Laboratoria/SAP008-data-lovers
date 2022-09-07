import { filterData } from './data.js';
import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';

const content = document.querySelector('#cards-main'); // impressão dos cards
const btnFilter = document.querySelector('#btn-filtro'); // botão de filtro
const medalSelector = document.querySelector('#medalhas'); // imputs de medalha
const sportSelector = document.querySelector('#modalidades');
const atletesSelector = document.querySelector('#atletas');

const arrayAthletes = data.athletes
let arrayReturn = []



sportSelector.onclick = (event) => {
    arrayReturn = arrayAthletes.filter(medalFilter);
    console.log(sportSelector.value);
    cardsPrint();
}

btnFilter.onclick = (event) => {
    arrayReturn = arrayAthletes.filter(medalFilter);
    cardsPrint();
}

function medalFilter(atleta) {
    if (medalSelector.value == 'All') {
        return atleta.sport == sportSelector.value
    }
    return atleta.sport == sportSelector.value && atleta.medal == medalSelector.value;
}

// função para impressão dos cards
function cardsPrint() {
    content.innerHTML = filterData(arrayReturn);
}