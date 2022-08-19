import { filterData } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const filterBox = document.querySelector('#filterbox');
filterBox.hidden = true;
const buttonFilter = document.querySelector('#filter');
const buttonSearch = document.querySelector('#search');
const cards = document.querySelector('#cards');
const form = document.querySelector('#form');


buttonFilter.addEventListener('click', (event) => { //exibe filtros
    filterBox.hidden = false;
    event.preventDefault() //adicionar ao buttonSearch.addEventListener também
});

const keyWords = document.querySelector("#keywords").value //acessa valor do input de texto
const genderChecked = document.querySelectorAll('input[name="gender"]:checked');
const speciesChecked = document.querySelectorAll('input[name="species"]:checked');
const statusChecked = document.querySelectorAll('input[name="status"]:checked');

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

buttonSearch.addEventListener('click', (event) => { //filtra e exibe cards
    event.preventDefault()

  
     if(keyWords !== "") {
        return console.log(data.map(elemento => (elemento.keyWords)))
        
    

   
    } else if (form.status[0].checked === true) {
        return cards.innerHTML = showCards(filterData(data, "status", "Alive"))
    } else if (form.status[1].checked === true) {
        return cards.innerHTML = showCards(filterData(data, "status", "Dead"))
    } else if (form.status[2].checked === true) {
        returncards.innerHTML = showCards(filterData(data, "status", "unknown"))
    } else if (form.gender[0].checked === true) {
        return cards.innerHTML = showCards(filterData(data, "gender", "Female"))
    } else if (form.gender[1].checked === true) {
        return cards.innerHTML = showCards(filterData(data, "gender", "Male"))
    } else if (form.species[0].checked === true) {
        return cards.innerHTML = showCards(filterData(data, "species", "Human"))
    } else if (form.species[1].checked === true) {
        return cards.innerHTML = showCards(filterData(data, "species", ""))
    };

});
// L29 E os personagens não-humanos? Como filtrá-los?
// L44 Como puxar radio buttons pela class?
// Como funciona o .join() depois do template?
// CSS como scrollar apenas os cards na página?
// Como usar as tipografias escolhidas?