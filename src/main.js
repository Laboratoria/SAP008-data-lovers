import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const btnSobre = document.querySelector('#btn-sobre');
const main = document.querySelector("#main-content");
const modal=document.querySelector("#modal");
btnSobre.addEventListener('click', function(){
    modal.style.display = 'flex';
    main.style.display = 'none';
})

const btnVoltar = document.querySelector('#btn-voltar');
btnVoltar.addEventListener('click', function(){
    main.style.display = 'flex';
    modal.style.display = 'none';
})

const voltarFooter = document.querySelector('#voltar-footer');
voltarFooter.addEventListener('click', function(){
    modal.style.display = 'flex';
    main.style.display = 'none';
})



function changeNavbar(x) {
    x.classList.toggle('change');
}

changeNavbar()

function acao() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'block';
}
acao()

function voltar() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
}
voltar()
console.log(example, data);
