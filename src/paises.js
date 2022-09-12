import { medalFilter, filterTeam, stringTeam, computeStatsTeam } from './data.js';
import data from './data/athletes/athletes.js';

const content = document.querySelector('#cards-main'); // impressão dos cards
const medalSelector = document.querySelector('#medalhas'); // imputs de medalha
const teamSelector = document.querySelector('#pais');
const statistic = document.querySelector('#calculo-agregado')

const arrayAthletes = data.athletes

function startPage() {
    teamSelector.innerHTML = stringTeam(arrayAthletes)
    content.innerHTML = filterTeam(arrayAthletes, teamSelector.value)
    console.log(teamSelector.value)
    console.log('a página carregou')

    statistic.innerHTML = (computeStatsTeam(arrayAthletes))
}

startPage()

teamSelector.onchange = (event) => {
    content.innerHTML = filterTeam(arrayAthletes, teamSelector.value)
    console.log(teamSelector.value)
}

medalSelector.onchange = (event) => {
    content.innerHTML = medalFilter(arrayAthletes, medalSelector.value, teamSelector.value);
}
