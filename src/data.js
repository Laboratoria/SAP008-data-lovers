export {addTela, selectedDuration};

function addTela (filmsList) {
  const arrayFilms = filmsList.map(function (film) {
    const template = `
    <div class="poster">
      <img class="poster-img" src="${film.poster}" alt="${film.title}" name="${film.title}" >
      <h7>${film.title}</h7><br>
      <h7>${film.duration}min, Score ${film.rt_score}, ${film.release_date}</h7>
    </div>
    `;
    return template; 
  }); 
  return arrayFilms.join('');
}

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
