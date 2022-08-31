import data from "./data/rickandmorty/rickandmorty.js";
import { orderCrescente, ordemDecrescente } from "./data.js";

function renderizaCards(cards) {
  const root = document.getElementById("root");
  root.className = "container";
  root.innerHTML = cards.join("");
}

const btn = document.getElementById("tudo");

btn.addEventListener("click", function () {
  const markup = data.results.sort(orderCrescente).map((result) => {
    return montarCards(result);
  });
  console.log(markup);
  renderizaCards(markup);
});

const btnCrescente = document.getElementById("ordenaz");
btnCrescente.addEventListener("click", function () {
  const markup = data.results.sort(orderCrescente).map((result) => {
    return montarCards(result);
  });
  renderizaCards(markup);
});

const btnDecrescente = document.getElementById("ordenza");
btnDecrescente.addEventListener("click", function () {
  const markup = data.results.sort(ordemDecrescente).map((result) => {
    return montarCards(result);
  });
  renderizaCards(markup);
});

function montarCards(param) {
  return `
  <div class="card">
  <div class="card-image">
    <img src="${param.image}" class="foto" alt="" />
  </div>
  <div class="card-conteudo">
    <h3>${param.name}</h3>
    <label>Status: ${param.status} </label>
    <label>Especie: ${param.species} </label>
    <label>Genero: ${param.gender} </label>
    <label>Local: ${param.location.name} </label>
    <label>Origem: ${param.origin.name} </label>
  </div>
</div>
`;
}
