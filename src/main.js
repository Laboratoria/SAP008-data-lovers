import { filterData } from "./data.js";

import data from "./data/rickandmorty/rickandmorty.js";

// IMPORTANDO TODOS OS DADOS DOS PERSONAGENS:
const rickandmorty = data.results;

// CHAMANDO FUNÇÃO P/ CRIAR CARDS NA TELA:
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
        `;
    return template;
  });

  document.querySelector("#exibirCards").innerHTML = exibir.join("");
}

// PEGOU VALOR DO QUE USUÁRIO SELECIONOU DE TIPO DE ESPÉCIE:
document.querySelector("#especie").addEventListener("change", (event) => {
  const valor = event.target.value;
  // CHAMANDO A FUNÇÃO DO FILTERDATA E DANDO O VALUE E A ARRAY COMO PARÂMETRO
  const especieFiltrada = filterData(valor, rickandmorty);
  // CHAMANDO A FUNÇÃO DO MAP E DANDO COMO PARÂMETRO A FUNÇÃO DO FILTER PARA PRINTAR NA TELA
  criaCard(especieFiltrada);
});
