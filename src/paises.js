import { medalFilter, filterTeam, stringTeam } from './data.js';
import data from './data/athletes/athletes.js';

const content = document.querySelector('#cards-main'); // impressão dos cards
//const btnFilter = document.querySelector('#btn-filtro'); // botão de filtro
const medalSelector = document.querySelector('#medalhas'); // imputs de medalha
const teamSelector = document.querySelector('#pais');

const arrayAthletes = data.athletes

function startPage() {
    teamSelector.innerHTML = stringTeam(arrayAthletes)
    content.innerHTML = filterTeam(arrayAthletes, teamSelector.value)
    console.log(teamSelector.value)
    console.log('a página carregou')
}

startPage()

teamSelector.onchange = (event) => {
    content.innerHTML = filterTeam(arrayAthletes, teamSelector.value)
    console.log(teamSelector.value)
}

medalSelector.onchange = (event) => {
    content.innerHTML = medalFilter(arrayAthletes, medalSelector.value, teamSelector.value);
}
