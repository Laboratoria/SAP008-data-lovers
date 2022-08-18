import { sortAz, sortZa, filterName, speciesFilter, genderFilter, statusFilter, calculationInte, filterName, orderAz } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';





function cardsData(data) {
  document.getElementById('read').innerHTML = data.map((item) => `

    <div class="card">
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
  </div>  
  `)

    .join('')
}
cardsData(data.results);

////// SELETORES
const genderResults = document.getElementById("gender");
const statusResults = document.getElementById("status");
const speciesResults = document.getElementById("species");
const arrayOrder = document.getElementById("orderAz");
const calculoIntegrado = document.getElementById("calculation");
const resultsNames = document.getElementById("buscar");

function showPercentage(data) {
  calculoIntegrado.innerHTML = `Essa categoria representa ${data}`;
}

function printGenderFilter(e) {
  const genderResult = genderFilter(data.results, e.target.value);

  const percentageText = `${percentCalc(
    data.results.length,
    genderResult.length
  )}% dos personagens`;
  showPercentage(percentageText);
  return cardsData(genderResult);
}
genderResults.addEventListener("change", printGenderFilter);

function printStatusFilter(e) {
  const statusResults = statusFilter(data.results, e.target.value);
  const percentageText = `${percentCalc(
    data.results.length,
    statusResults.length
  )}% dos personagens`;
  showPercentage(percentageText);
  return cardsData(statusResults);
}
statusResults.addEventListener("change", printStatusFilter);

function printSpeciesFilter(e) {
  //console.log(e.target.name)
  const speciesResults = speciesFilter(data.results, e.target.value);
  const percentageText = `${percentCalc(
    data.results.length,
    speciesResults.length
  )}% dos personagens`;
  showPercentage(percentageText);
  return cardsData(speciesResults);
}
speciesResults.addEventListener("change", printSpeciesFilter);

function printOrderFilterAz(e) {
  const orderAz = orderAz(data.results, e.target.value);
  return cardsData(arrayOrder);
}
arrayOrder.addEventListener("change", printOrderFilterAz);

function searchCharacterNames(e) {
  const resultsNames = filterName(data.results, e.target.value);
  return cardsData(resultsNames);
}
resultsNames.addEventListener("keyup", searchCharacterNames);
