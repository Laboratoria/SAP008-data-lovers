import { dataFilter, nameFilter, computeStats } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';





function cardsData(data) {

  return data.map((item) => `

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
document.getElementById('read').innerHTML = cardsData(data.results);

const selectGender = document.getElementById("gender");
const selectSpecies = document.getElementById("species");
const selectStatus = document.getElementById("status");


