import { ghibli } from './data.js';
import data from './data/ghibli/ghibli.js';

const films = data.films;
const cataloguePeople = document.querySelector('.catalogue');
const btnFilms = document.querySelectorAll('.btn-film');

function printCataloguePeople(films) {
  const arrayPeople = films.map((film) => {
    const people = film.people.map((person) => {
      const templatePerson = `
          <div class="card">
            <div class="card-img-cut">
              <img class="card-img" src="${person.img}" alt="${person.name}" name="${person.name}" >
            </div>
            <div class="card-txt">
              <h4>${person.name}</h4>
              <p>${person.gender}</p>
              <p>${person.age}</p>
              <p>${person.specie}</p>
            </div> 
          </div>
          `;
      return templatePerson;
    });
    return people.join('');
  })
  return arrayPeople.join('');
}

for (let i = 0; i < btnFilms.length; i++) {
  btnFilms[i].addEventListener('click', () => {
    const filmPeople = ghibli.filmPeople(films, btnFilms[i].value);
    cataloguePeople.innerHTML = printCataloguePeople(filmPeople);
  });
}

