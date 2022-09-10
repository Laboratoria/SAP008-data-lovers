import { stringSport, filterSport, medalFilter, userSearch } from './data.js';
import data from './data/athletes/athletes.js';

const content = document.querySelector('#cards-main'); // impressão dos cards
//const btnFilter = document.querySelector('#btn-filtro'); // botão de filtro
const inptSearch = document.querySelector('#barra-pesquisar');
//const btnSearch = document.querySelector('#botao-lupa');
const medalSelector = document.querySelector('#medalhas'); // imputs de medalha
const sportSelector = document.querySelector('#modalidades');
const arrayAthletes = data.athletes;

function startPage() {
    sportSelector.innerHTML = stringSport(arrayAthletes);
    content.innerHTML = filterSport(arrayAthletes, sportSelector.value);
    console.log(sportSelector.value);
    console.log('a página carregou');
}

startPage()

sportSelector.onchange = (event) => {
    content.innerHTML = filterSport(arrayAthletes, sportSelector.value);
    console.log(sportSelector.value);
}

medalSelector.onchange = (event) => {
    content.innerHTML = medalFilter(arrayAthletes, medalSelector.value, sportSelector.value);
}

inptSearch.onkeyup = function (e) {
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