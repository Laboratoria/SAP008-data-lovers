export const ghibli = {printCatalogue, printModal, filterDuration, sortedFilms, 
  countFilms, countPeopleModal, countLocations, countPeople, countVehicles};

function printCatalogue(filmsList) {
  const arrayFilms = filmsList.map((film) => {
    const template = `
    <button class= "btn-modal" type="button"><div class="card">
    <img class="card-img" src="${film.poster}" alt="${film.title}" name="${film.title}" > 
      <br><h7>${film.title}</h7><br>
      <h7>(${film.release_date})</h7>
    </div></button>
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

function filterDuration (films, selection) {
  const filmsDuration = films.filter((film) => {
    if (selection === '90min') {
      return film.duration <= 90;
    } else if (selection === '120min'){
      return film.duration > 90 && film.duration <= 120;
    } else if (selection === '150min'){
      return film.duration > 120;
    }
    return film;
  })
  return filmsDuration;
}

function sortedFilms(films, selection) { 
  const sorted = films.sort((a,b) => {
    if (selection === 'rt_score') {
      return b.rt_score - a.rt_score;
    } else if (selection === 'release_date') {
      return b.release_date - a.release_date;
    } else if (selection === 'order') {
      return a.release_date - b.release_date
    }
  });
  return sorted;
}

function countFilms (films) {
  return Object.keys(films).length;
}

function countPeopleModal (films) {
  const count = films.map((film) => {
    return (film.people).length;
});
}

function countPeople (films) {
  const count = films.map((film) => {
    return Object.keys(film.people).length;
});
  count.join('')
    const sum = count.reduce((a,b) => a + b, 0);
    return sum;
}

function countLocations (films) {
  const count = films.map((film) => {
    return Object.keys(film.locations).length;
});
  count.join('')
    const sum = count.reduce((a,b) => a + b, 0);
    return sum;
}

function countVehicles (films) {
  const count = films.map((film) => {
    return Object.keys(film.vehicles).length;
});
  count.join('')
    const sum = count.reduce((a,b) => a + b, 0);
    return sum;
}

