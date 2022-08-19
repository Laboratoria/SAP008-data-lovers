import { dataFilter, nameFilter, computeStats, orderAz } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';



function cardsData(data) {
  document.getElementById('read').innerHTML = data.map((item) => `

    <section class="card">
      <div class="card-in"> 
        <div class="card-first">
        <img src="${item.image}">
         <p><strong> Nome: ${item.name}</strong></p>
      </div> 
      
      <div class="back-card">
        <ul class="list-card">
          <li>Nome: ${item.name}</li>
          <li>Status: ${item.status}</li>
          <li>Espécie: ${item.species}</li>
          <li>Gênero: ${item.gender}</li>      
          <li>Localização: ${item.location.name}</li>
        </ul>
      </div>
    </div>
  </section>  
  `)
}
cardsData(data.results);

// SELETORES

const selectGender = document.querySelector(".select-gender");
const selectSpecie = document.querySelector(".select-specie");
const selectStatus = document.querySelector(".select-status");
const teste = document.getElementById("teste");
const showOrder = document.getElementById("orderAz")



function genderFiltro() {
  teste.style.display = "flex";
  /*teste.innerHTML = `O número de personagens dessa categoria é ${computeStats(data.results, "gender", selectGender.value)}`*/
  return cardsData(dataFilter(data.results, "gender", selectGender.value));
}

function specieFiltro() {
  teste.style.display = "flex";
  /*teste.innerHTML = `O número de personagens dessa categoria é ${computeStats(data.results, "species", selectSpecie.value)}`*/
  return cardsData(dataFilter(data.results, "species", selectSpecie.value));
}
function statusFiltro() {
  teste.style.display = "flex";
  return cardsData(dataFilter(data.results, "status", selectStatus.value));
}
function sortByAz() {
  teste.style.display = "none";
  return cardsData(orderAz(data.results))
}

selectGender.addEventListener("change", genderFiltro);
selectSpecie.addEventListener("change", specieFiltro);
selectStatus.addEventListener("change", statusFiltro);
showOrder.addEventListener("change", sortByAz);