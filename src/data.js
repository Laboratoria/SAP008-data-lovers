export const ghibli = {filterDuration, sortedFilms, countFilms, countPeopleModal, 
  countLocations, countPeople, countVehicles, filmPeople};

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

function filmPeople (films, btn) {
  const filmSelected = films.filter((film) => {
    if (btn === film.title){
      return film.people;
    }
  })
  return filmSelected;
}

function printCatalogueLoc(films) {
  const arrayLoc = films.map((film) => {
    const locations = film.locations.map((loc) => {
      const templateLoc = `
      <div class="card-Loc">
      <button class= "btn-modal-loc" type="button"> 
      <img class="img-loc" src="${loc.img}" alt="${loc.name}" name="${loc.name}"></button>
        <br><h7>${loc.name}</h7><br>
      </div>
      `;
      return templateLoc ;
    });
    return locations.join('');
  })
  return arrayLoc.join('');
}

function printCatalogueVeh(films) {
  const arrayVeh = films.map((film) => {
    const vehicles = film.vehicles.map((veh) => {
      const templateVeh = `
      <div class="card-Loc">
      <button class= "btn-modal-loc" type="button"> 
      <img class="img-loc" src="${veh.img}" alt="${veh.name}" name="${veh.name}" > </button>
        <br><h7>${veh.name}</h7><br>
      </div>
      `;
      return templateVeh;
    });
    return vehicles.join('');
  })
  return arrayVeh.join('');
}
