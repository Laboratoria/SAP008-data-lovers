export {addTela, selectedDuration, sorted};

// ===== Inserir cards na Tela =====
function addTela (filmsList) {
  const arrayFilms = filmsList.map(function (film) {
    const template = `
    <div class="poster">
      <button class= "btn-modal" type="button"> 
      <img class="poster-img" src="${film.poster}" alt="${film.title}" name="${film.title}" > </button>
      <div id="modal" class="modal">
        <div class="modal-content">
        <p>${film.title}<br>${film.description}</p>
        <p class="close">Sair</p>
        </div> 
      </div>
      <h7>${film.title}</h7><br>
      <h7>${film.duration}min, Score ${film.rt_score}, ${film.release_date}</h7>
    </div>
    `;
    return template; 
  }); 
  return arrayFilms.join('');
}

// ===== Filtro Tempo =====
function selectedDuration (filmsList, selected) {
  const filmsDuration = filmsList.filter(function (film){
    if (selected === '90min'){
      return film.duration <= 90;
    } else if (selected === '120min'){
        return film.duration > 90 && film.duration <= 120;
    } else if (selected === '150min'){
        return film.duration > 120;
    }
    return film;
  })
  return addTela (filmsDuration);
}

// ===== Ordenação =====
function sorted(films, selection) { 
  const sortedFilms = films.sort((a,b) => {
    if (selection == 'rt_score') {
      return b.rt_score - a.rt_score;
    } else if (selection == 'release_date') {
      return b.release_date - a.release_date;
    }
  });
  return addTela(sortedFilms)
}