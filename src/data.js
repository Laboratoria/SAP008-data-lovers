export const ghibli = {printCatalogue, printModal, filterDuration, sortedFilms, countFilms, countLocations, countPeople, countVehicles};

function printCatalogue(filmsList) {
  const arrayFilms = filmsList.map((film) => {
    const template = `
    <div class="card">
    <button class= "btn-modal" type="button"> 
    <img class="poster-img" src="${film.poster}" alt="${film.title}" name="${film.title}" > </button>
      <h7>${film.title}</h7><br>
      <h7>${film.duration}min, Score ${film.rt_score}, ${film.release_date}</h7>
    </div>
    `;
    return template; 
  }); 
  return arrayFilms.join('');
}

function printModal (film) {
  return `
  <div class="modal-content">
    <p>${film.title}<br>${film.description}</p>
    <p class="close">Sair</p>
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
