import { printCards, filterData } from './data.js';
// import data from './data/lol/lol.js';

import data from './data/rickandmorty/rickandmorty.js';

const arrayRickmorty= data.rickandmorty;

//Chamando a função printCards quando recarregar a página
window.addEventListener("load", printCards(arrayRickmorty));

//Acessando somente as species nos dados do rickandmorty.js
const especies= arrayRickmorty.map(({ species }) => species)
console.log(especies);

let filtroEspecie= document.querySelector("#especie");
filtroEspecie.addEventListener("click",filterData(arrayRickmorty));