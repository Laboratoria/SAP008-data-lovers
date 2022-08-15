//import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

// IMPORTANDO TODOS OS DADOS DOS PERSONAGENS: 
const rickandmorty = data.results;

// PRINTANDO OS CARDS NA TELA
function criaCard (personagens){
const exibir = personagens.map((personagem) => {
const template = `
    <div class = "cards">
        <div class = "imagem">
         <img class = "imagemCard" src="${personagem.image}">
         <div class = "name">${personagem.name}</div>
        </div>
        <ul class = "textoCard">
         <li>Name: ${personagem.name}</li>
         <li>Espécie: ${personagem.species}</li>
         <li>Gênero: ${personagem.gender}</li>
         <li>Status: ${personagem.status}</li>
        </ul>
    </div>
    `
    return template;
});

document.querySelector("#exibirCards").innerHTML = exibir.join("<br>");
}

criaCard(rickandmorty);







      

    
    
    






