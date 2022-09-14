import { stringSport, filterSport, medalFilter, computeStats } from './data.js';
import data from './data/athletes/athletes.js';

const content = document.querySelector('#cards-main'); // impressão dos cards
const inptSearch = document.querySelector('#barra-pesquisar');
const medalSelector = document.querySelector('#medalhas'); // imputs de medalha
const sportSelector = document.querySelector('#modalidades');
// const orderSelector = document.querySelector('#ordenacao')
const statistic = document.querySelector('#calculo-agregado')

const arrayAthletes = data.athletes;

function startPage() {
    sportSelector.innerHTML = stringSport(arrayAthletes);
    content.innerHTML = filterSport(arrayAthletes, sportSelector.value);

    statistic.innerHTML = (computeStats(arrayAthletes))
}

startPage()

sportSelector.onchange = () => {
    content.innerHTML = filterSport(arrayAthletes, sportSelector.value);
}

medalSelector.onchange = () => {
    content.innerHTML = medalFilter(arrayAthletes, medalSelector.value, sportSelector.value);
}
/*
orderSelector.onchange = () => {
    //...
}
*/

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

