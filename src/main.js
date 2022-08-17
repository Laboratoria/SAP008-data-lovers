import { dataFilter, nameFilter, computeStats } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';

function cardsData(data) {
    document.getElementById('read').innerHTML = data.map((item) => `
      <section class="card">
        <div class="card-face">
          <div class="card-face-front">
          <img src="${item.image}">
          <p><strong>${item.name}</strong></p>
          </div>

          <div class="card-face-back">
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
  
  const selectGender = document.getElementById("gender");
  const selectSpecies = document.getElementById("species");
  const selectStatus = document.getElementById("status"); 


