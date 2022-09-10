import { medalFilter, filterTeam, stringTeam, filterData, sortData } from './data.js';
import data from './data/athletes/athletes.js';

const content = document.querySelector('#cards-main'); // impressão dos cards
//const btnFilter = document.querySelector('#btn-filtro'); // botão de filtro
const orderSelector = document.querySelector('#ordenacao'); // imputs de medalha

const arrayAthletes = data.athletes

/*
function startPage() {
    let test = []
    for (let i = 0; i < 10; i++) {
        content.innerHTML = filterData(arrayAthletes)
        console.log(orderSelector.value)
    }
    console.log(orderSelector.value)
    console.log('a página carregou')
}

startPage()

orderSelector.onchange = (event) => {
    content.innerHTML = sortData(arrayAthletes, orderSelector.value)
    console.log(orderSelector.value)
}
*/