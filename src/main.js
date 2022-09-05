import data from "./data/rickandmorty/rickandmorty.js";
import {
  orderCrescente,
  ordemDecrescente,
  filterArr,
  porcentagemCal,
} from "./data.js";

//MENU RESPONSIVO
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {  
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active'); 
})


//FUNÇÃO DE 

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

const btnDesconhecido = document.getElementById("desconhecido");

btnDesconhecido.addEventListener("click", function () {
  const markup = filterArr(data.results, "status", "unknown").map((result) => {
    return montarCards(result);
  });

  renderizaCards(markup);
});

const btnVivo = document.getElementById("vivo");

btnVivo.addEventListener("click", function () {
  const markup = filterArr(data.results, "status", "Alive").map((result) => {
    return montarCards(result);
  });
  renderizaCards(markup);
});

const btnMorto = document.getElementById("morto");
btnMorto.addEventListener("click", function () {
  const markup = filterArr(data.results, "status", "Dead").map((result) => {
    return montarCards(result);
  });

  renderizaCards(markup);
});

const btnEspecie = document.getElementById("especie");

btnEspecie.addEventListener("click", function () {
  const markup = filterArr(data.results, "species", "Alien").map((result) => {
    return montarCards(result);
  });

  renderizaCards(markup);
});

document.querySelector("#result").innerHTML = `
Todos (${data.results.length})
Desconhecidos (${porcentagemCal(
  filterArr(data.results, "status", "unknown").length,
  data.results.length
)})
Vivo (${porcentagemCal(
  filterArr(data.results, "status", "Alive").length,
  data.results.length
)})
Morto (${porcentagemCal(
  filterArr(data.results, "status", "Dead").length,
  data.results.length
)})
Especie (${porcentagemCal(
  filterArr(data.results, "species", "Alien").length,
  data.results.length
)})
`;