import { medalFilter, filterTeam, stringTeam, computeStatsTeam, createCards } from './data.js';
import data from './data/athletes/athletes.js';

const content = document.querySelector('#cards-main'); // impressão dos cards
const medalSelector = document.querySelector('#medalhas'); // imputs de medalha
const teamSelector = document.querySelector('#pais');
const statistic = document.querySelector('#calculo-agregado')

const arrayAthletes = data.athletes

function startPage() {
    teamSelector.innerHTML = stringTeam(arrayAthletes)
    const filtered = filterTeam(arrayAthletes, teamSelector.value);
    content.innerHTML = createCards(filtered);

    statistic.innerHTML = (computeStatsTeam(arrayAthletes))
}

startPage()

teamSelector.onchange = () => {
    const filtered = filterTeam(arrayAthletes, teamSelector.value);
    content.innerHTML = createCards(filtered);
}

medalSelector.onchange = () => {
    content.innerHTML = medalFilter(arrayAthletes, medalSelector.value, teamSelector.value);
}
