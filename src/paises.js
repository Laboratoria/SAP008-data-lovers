import { stringTeam, computeStatsTeam, createCards, filterData, filterMedal } from './data.js';
import data from './data/athletes/athletes.js';

const content = document.querySelector('#cards-main'); // impressão dos cards
const medalSelector = document.querySelector('#medalhas'); // imputs de medalha
const teamSelector = document.querySelector('#pais');
const statistic = document.querySelector('#calculo-agregado')

const arrayAthletes = data.athletes

function startPage() {
    teamSelector.innerHTML = stringTeam(arrayAthletes)
    const filtered = filterData(arrayAthletes, "team", teamSelector.value);
    content.innerHTML = createCards(filtered);

    statistic.innerHTML = (computeStatsTeam(arrayAthletes))
}

startPage()

teamSelector.onchange = () => {
    const filtered = filterData(arrayAthletes, "team", teamSelector.value);
    content.innerHTML = createCards(filtered);
}

medalSelector.onchange = () => {
    const filtered = filterData(arrayAthletes, "team", teamSelector.value);
    const filteredMedal = filterMedal(filtered, "medal", medalSelector.value);
    content.innerHTML = createCards(filteredMedal);
}

