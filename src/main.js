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
  .join('')
}
cardsData(data.results);

// SELETORES

const selectGender = document.querySelector(".select-gender");
const selectSpecie = document.querySelector(".select-specie");
const selectStatus = document.querySelector(".select-status");
const showComputeStats = document.getElementById("calculation");
const selectOrder = document.getElementById("orderAz")



function genderFiltro() {
  showComputeStats.style.display = "flex";
  showComputeStats.innerHTML = `O número de personagens dessa categoria é: ${computeStats(data.results, "gender", selectGender.value)}`
  return cardsData(dataFilter(data.results, "gender", selectGender.value));
}

function specieFiltro() {
  showComputeStats.style.display = "flex";
  showComputeStats.innerHTML = `O número de personagens dessa categoria é ${computeStats(data.results, "species", selectSpecie.value)}`
  return cardsData(dataFilter(data.results, "species", selectSpecie.value));
}
function statusFiltro() {
  showComputeStats.style.display = "flex";
  showComputeStats.innerHTML = `O número de personagens dessa categoria é ${computeStats(data.results, "status", selectStatus.value)}`
  return cardsData(dataFilter(data.results, "status", selectStatus.value));
}
function sortByAz() {
  showComputeStats.style.display = "none";
  return cardsData(orderAz(data.results, "name", selectOrder.value))
}

selectGender.addEventListener("change", genderFiltro);
selectSpecie.addEventListener("change", specieFiltro);
selectStatus.addEventListener("change", statusFiltro);
selectOrder.addEventListener("change", sortByAz);