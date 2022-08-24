import {ghibli} from '../data.js';
import data from '../data/ghibli/ghibli.js';

const films = data.films;
const modal = document.querySelector('.modal');
const btnFilterDuration = document.querySelector('#filter-duration');
const btnOrderFilms = document.querySelector('#order-by');

function printCatalogue(filmsList) {
  const arrayFilms = filmsList.map((film) => {
    const template = `
      <div class="card">
          <button class= "btn-modal" type="button"> 
            <img class="card-img" src="${film.poster}" alt="${film.title}" name="${film.title}" > 
          </button>
        <div class="card-txt">
          <h4>${film.title}</h4>
          <p>(${film.release_date})</p>
        </div>
      </div>
      `;
    return template; 
  }); 
return arrayFilms.join('');
}

function printModal (film) {
  return `
  <div class="modal-content">
    <h1>${film.title}</h1>
    <p class="modal-director">Dirigido por ${film.director}</p>
    <div class="modal-score-duration">
      <p>${film.duration}min</p>
      <p>Score: ${film.rt_score}</p> 
    </div>
    <div class="modal-description">
      <p>${film.description}</p><br>
      <p><strong>${(film.people).length} personagens ajudam a contar essa história!</strong></p>
    </div>
    <button class="close">Sair</button>
  </div> 
  `
}

function printCards (films){
  const catalogue = document.querySelector('.catalogue');
  catalogue.innerHTML = printCatalogue(films);

  const btnModal = document.querySelectorAll('.btn-modal');

  for (let i = 0; i < films.length; i++){
    const showModal = prepareModal(films[i]);
    btnModal[i].addEventListener ('click', showModal);
  }
}
printCards(films);

function prepareModal (film) {
  return function (){
    modal.innerHTML = printModal(film);
    const closeModal = document.querySelector('.close');
    closeModal.addEventListener ('click', btnHideModal);
    showModal ();
  }
}

modal.addEventListener ('click', hideModal);

function showModal(){
  modal.style.display = "block";
}
function btnHideModal(){
  modal.style.display = "none";
}
function hideModal(e){
  if (e.target == modal){
  modal.style.display = "none";
  }
}

btnFilterDuration.addEventListener ('change', () => {
  const selected = (btnFilterDuration).value;
  const filterDuration = ghibli.filterDuration(films, selected);
  printCards(filterDuration);
});

btnOrderFilms.addEventListener('change', () => {
  let selection = btnOrderFilms.value;
  const sortedFilms = ghibli.sortedFilms(films, selection);
  printCards(sortedFilms);
});