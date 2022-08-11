import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

// CRIAR CONST COM TODOS OS DADOS DOS PERSONAGENS: 

const rickandmorty = data.results;

console.log(rickandmorty)

// PRINTAR TODOS OS CARDS NA TELA:

const exibir = rickandmorty.map(({name})=> name)

document.getElementById("teste").innerHTML = exibir


//window.addEventListener("load",printarcards())

//function printarcards {

 //   }
    


// SELECIONAR OPCÃO DE ESPÉCIE:

//let filtroEspecie = document.querySelector("#especie").value

//filtroEspecie.addEventListener("click",function())

//switch