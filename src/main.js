import {
  filtrar,
  ordenar,
  calculoAgregado,

} from "./data.js";

import data from "./data/rickandmorty/rickandmorty.js";

// IMPORTANDO TODOS OS DADOS DOS PERSONAGENS:
const rickandmorty = data.results;

// CHAMANDO FUNÇÃO P/ CRIAR CARDS NA TELA:
criaCard(rickandmorty);

// CRIANDO OS CARDS NA TELA
function criaCard(personagens) {
  const printarCard = personagens.map((personagem) => {
    const criandoCard = `
        <div class = "cardsBox">
            <div class = "imagem">
             <img class = "imagemCard" src="${personagem.image}" alt="Imagem personagem">
             <div class = "nameCard">${personagem.name}</div>
            </div>
            <ul class = "textoCard">
             <li>Espécie: ${personagem.species}</li>
             <li>Gênero: ${personagem.gender}</li>
             <li>Status: ${personagem.status}</li>
            </ul>
        </div>
        `;
    return criandoCard;
  });

  document.querySelector("#exibirCards").innerHTML = printarCard.join("");
}

// PEGOU VALOR DO QUE USUÁRIO SELECIONOU DE TIPO DE ESPÉCIE:
document.querySelector("#especie").addEventListener("change", (event) => {
  const valor = event.target.value;
  // CHAMANDO A FUNÇÃO FILTERDATABYKEY E DANDO O ARRAY, A PROPRIEDADE DO OBJETO E O VALOR COMO PARÂMETRO
  const especieFiltrada = filtrar(rickandmorty, "species", valor);

   const calculo = calculoAgregado(rickandmorty.length, especieFiltrada.length);
  document.getElementById("exibirCalculo").innerHTML =
    "Essa categoria representa " + calculo + "% dos personagens";
// CHAMANDO A FUNÇÃO DO MAP E DANDO COMO PARÂMETRO A FUNÇÃO DO FILTER PARA PRINTAR NA TELA
  criaCard(especieFiltrada);
});

document.querySelector("#genero").addEventListener("change", (event) => {
  const valor = event.target.value;
  const generoFiltrado = filtrar(rickandmorty, "gender", valor);

  const calculo = calculoAgregado(rickandmorty.length, generoFiltrado.length);
  document.getElementById("exibirCalculo").innerHTML =
    "Essa categoria representa " + calculo + "% dos personagens";

  criaCard(generoFiltrado);
});

document.querySelector("#status").addEventListener("change", (event) => {
  const valor = event.target.value;
  const statusFiltrado = filtrar(rickandmorty, "status", valor);

  const calculo = calculoAgregado(rickandmorty.length, statusFiltrado.length);
  document.getElementById("exibirCalculo").innerHTML =
    "Essa categoria representa " + calculo + "% dos personagens";

  criaCard(statusFiltrado);
});

document.querySelector("#ordemalfabetica").addEventListener("change", (event) => {
    const valor = event.target.value;
    const ordem = ordenar(rickandmorty, valor);
    const calculo = calculoAgregado(rickandmorty.length, ordem.length);
    document.getElementById("exibirCalculo").innerHTML =
      "Essa categoria representa " + calculo + "% dos personagens";

    criaCard(ordem);
  });
