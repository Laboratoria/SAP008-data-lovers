export {ghibli};

const ghibli = {
  printCatalogue:
  function printCatalogue(filmsList) {
    const arrayFilms = filmsList.map((film) => {
      const template = `
      <div class="card">
        <img class="card-img" src="${film.poster}" alt="${film.title}" name="${film.title}">
        <h7>${film.title}</h7><br>
        <h7>${film.duration}min, Score ${film.rt_score}, ${film.release_date}</h7>
      </div>
      `;
      return template; 
    }); 
    return arrayFilms.join('');
  },

  // printModal:
  // function printModal (film) {
  //   return `
  //   <div class="modal-content">
  //     <p>${film.title}<br>${film.description}</p>
  //     <p class="close">Sair</p>
  //   </div> 
  //   `
  // },

  filterDuration:
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
    return this.printCatalogue(filmsDuration);
  },

  sortedFilms:
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
    return this.printCatalogue(sorted)
  },

  countFilms:
  function countFilms (films) {
    return Object.keys(films).length;
  },

  countPeople:
  function countPeople (films) {
    const count = films.map((film) => {
      return Object.keys(film.people).length;
  });
    count.join('')
      const sum = count.reduce((a,b) => a + b, 0);
      return sum;
  },

  countLocations:
  function countLocations (films) {
    const count = films.map((film) => {
      return Object.keys(film.locations).length;
  });
    count.join('')
      const sum = count.reduce((a,b) => a + b, 0);
      return sum;
  },

  countVehicles:
  function countVehicles (films) {
    const count = films.map((film) => {
      return Object.keys(film.vehicles).length;
  });
    count.join('')
      const sum = count.reduce((a,b) => a + b, 0);
      return sum;
  }
}

// ==== Opção para o filtro funcionar ==== 
// ==== Quando essa está no main.js começa a reclamar de contato com o data.js ====
// const btnModal = document.querySelectorAll('.btn-modal');
// const catalogue = document.querySelector('.catalogue');

// function montarTela (films){
//   catalogue.innerHTML = addTela(films);

//   for (let i = 0; i < films.length; i++){
//     const showModal = prepareModal(films[i]);
//     btnModal[i].addEventListener ('click', showModal);
//   }
// }

// function prepareModal (film) {
//   return function (){
//     modal.innerHTML = mostrarModal(film);
//     const closeModal = document.querySelector('.close');
//     closeModal.addEventListener ('click', hideModal);
//     montarTela ();
//   }
// }