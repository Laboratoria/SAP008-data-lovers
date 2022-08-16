import {filterData} from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

// IMPORTANDO TODOS OS DADOS DOS PERSONAGENS: 
const rickandmorty = data.results;

//CHAMANDO FUNÇÃO P/ CRIAR CARDS NA TELA:
criaCard(rickandmorty);


// CRIANDO OS CARDS NA TELA
function criaCard(personagens) {
    const exibir = personagens.map((personagem) => {
        const template = `
    <div class = "cards">
        <div class = "imagem">
         <img class = "imagemCard" src="${personagem.image}">
         <div class = "name">${personagem.name}</div>
        </div>
        <ul class = "textoCard">
         <li>Espécie: ${personagem.species}</li>
         <li>Gênero: ${personagem.gender}</li>
         <li>Status: ${personagem.status}</li>
        </ul>
    </div>
    `
        return template;
    });

    document.querySelector("#exibirCards").innerHTML = exibir.join("");
}

// PEGOU VALOR DO QUE USUÁRIO SELECIONOU DE TIPO DE ESPÉCIE:
document.querySelector("#especie").addEventListener("change", (event) => {
const valor = event.target.value
const especieFiltrada = filterData(valor,rickandmorty)

criaCard(especieFiltrada)
      

})

// LINKANDO FUNÇÃO FILTERDATA COM DATA.JS COM SEU VALOR E CHAMANDO ELA




//FILTRO DE ESPÉCIE:
//Desenvolver uma função para filtrar cada tipo de espécie, são elas:
// 1) "Human"
// 2) "Humanoid"
// 3) "Alien"
// 4) "Poopybutthole"
// 5) "Mytholog"
// 6) "Animal"
// 7) "Vampire"
// 8) "Robot"
// 9) "Cronenberg"
// 10) "unknown"  - Inserir opcão não definido







