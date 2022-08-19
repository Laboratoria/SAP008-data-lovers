import { filterData, showCards } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const filterBox = document.querySelector('#filterbox');
const buttonFilter = document.querySelector('#filter');
const buttonSearch = document.querySelector('#search');
const cards = document.querySelector('#cards');
const form = document.querySelector('#form');

filterBox.hidden = true;
buttonFilter.addEventListener('click', (event) => { //exibe filtros
    filterBox.hidden = false;
    event.preventDefault() //adicionar ao buttonSearch.addEventListener também
});

buttonSearch.addEventListener('click', () => { //filtra e exibe cards
    const keyWords = form.keywords.value //acessa valor do input de texto
    const statusChecked = document.querySelectorAll('input[name="status"]:checked');
    const genderChecked = document.querySelectorAll('input[name="gender"]:checked');
    const speciesChecked = document.querySelectorAll('input[name="species"]:checked');

    const charactersKeyWords = filterData(data, argumeto, keyWords); // ???
    const charactersStatus = filterData(data, statusChecked, statusChecked.value); // ???
    const charactersGender = filterData(data, genderChecked, genderChecked.value); // ???
    const charactersSpecies = filterData(data, speciesChecked, charactersUnknow.value); // ???

    function showCards(infos) { //exibe cards
        return infos.map((elem) => `
          <div class="cards">
          <img id="photos" src="${elem.image}" alt="imagem do personagem"><br>
          <p id="names">${elem.name}</p><br>
          
            <ul class="cards-list">
            
              <p>Status: </p>
              <li>${elem.status}</li>
      
              <p>Gênero: </p>
              <li>${elem.gender}</li>
              
              <p>Espécie: </p>
              <li>${elem.species}</li>
            
            </ul>
          </div>
          `
        ).join('');
    };
    cards.innerHTML = showCards(charactersAlive)
});


// L29 E os personagens não-humanos? Como filtrá-los?
// L44 Como puxar radio buttons pela class?
// Como funciona o .join() depois do template?
// CSS como scrollar apenas os cards na página?
// Como usar as tipografias escolhidas?