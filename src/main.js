import { stringSport, computeStats, filterData, filterMedal, createCards, ascendingOrder, descendingOrder } from './data.js';
import data from './data/athletes/athletes.js';

const content = document.querySelector('#cards-main'); // impressão dos cards
const medalSelector = document.querySelector('#medalhas'); // imputs de medalha
const sportSelector = document.querySelector('#modalidades');
const orderSelector = document.querySelector('#ordenacao');
const statistic = document.querySelector('#calculo-agregado');
const inptSearch = document.querySelector('#barra-pesquisar');

const arrayAthletes = data.athletes;

function startPage() {
    sportSelector.innerHTML = stringSport(arrayAthletes);
    const filtered = filterData(arrayAthletes, "sport", sportSelector.value);
    content.innerHTML = createCards(filtered);

    statistic.innerHTML = (computeStats(arrayAthletes))
}

startPage()

sportSelector.onchange = () => {
    const filtered = filterData(arrayAthletes, "sport", sportSelector.value);
    content.innerHTML = createCards(filtered);
}

medalSelector.onchange = () => {
    const filtered = filterData(arrayAthletes, "sport", sportSelector.value);
    const filteredMedal = filterMedal(filtered, "medal", medalSelector.value);
    content.innerHTML = createCards(filteredMedal);
}

orderSelector.onchange = () => {
    const filtered = filterData(arrayAthletes, "sport", sportSelector.value);
    if (orderSelector.value == 'a-z') {
        const filterAZ = ascendingOrder(filtered);
        content.innerHTML = createCards(filterAZ);
    }
    else if (orderSelector.value == 'z-a') {
        const filterZA = descendingOrder(filtered);
        content.innerHTML = createCards(filterZA);
    }
}

inptSearch.onkeyup = function () {
    let input = inptSearch.value
    input = input.toLowerCase();
    let element = document.getElementsByClassName('nome');

    for (let i = 0; i < element.length; i++) {
        if (!element[i].innerHTML.toLowerCase().includes(input)) {
            element[i].style.display = "none";
        }
        else {
            element[i].style.display = "list-item";
        }
    }
};

