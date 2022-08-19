import {ghibli} from './data.js';
import data from './data/ghibli/ghibli.js';

const films = data.films;
const modal = document.querySelector('.modal');

function printCatalogue(filmsList) {
  const arrayFilms = filmsList.map((film) => {
    const template = `
      <div class="card">
        <button class= "btn-modal" type="button"> 
        <img class="card-img" src="${film.poster}" alt="${film.title}" name="${film.title}" > </button>
        <br><h7>${film.title}</h7><br>
        <h7>${film.release_date}</h7>
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
      <p>${film.description}</p>
      <p><strong>${(film.people).length} personagens ajudam a contar essa história!</strong></p>
    </div>
    <button class="close">Sair</button>
  </div> 
  `
}

function montarTela (films){
  const catalogue = document.querySelector('.catalogue');
  catalogue.innerHTML = printCatalogue(films);

  const btnModal = document.querySelectorAll('.btn-modal');

  for (let i = 0; i < films.length; i++){
    const showModal = prepareModal(films[i]);
    btnModal[i].addEventListener ('click', showModal);
  }
}
montarTela(films);

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

const btnFilterDuration = document.querySelector('#filter-duration');
btnFilterDuration.addEventListener ('change', () => {
  const selected = (btnFilterDuration).value;
  const filterDuration = ghibli.filterDuration(films, selected);
  montarTela(filterDuration);
});

const btnOrderFilms = document.querySelector('#order-by');
btnOrderFilms.addEventListener('change', () => {
  let selection = btnOrderFilms.value;
  const sortedFilms = ghibli.sortedFilms(films, selection);
  montarTela(sortedFilms);
});