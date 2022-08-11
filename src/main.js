import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const btnSobre= document.querySelector('#btn-sobre')
btnSobre.addEventListener("click", function(){
    const modal=document.querySelector("#modal");
    modal.style.display = "flex";
    const main = document.querySelector("#main-content");
    main.style.display = "none";
})



console.log(example, data);
