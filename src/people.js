import {ghibli} from './data.js';
import data from './data/ghibli/ghibli.js';

const films = data.films;
const cataloguePeople = document.querySelector('.catalogue-people');
function printCataloguePeople(films) {
    const arrayPeople = films.map((film) => {
      const people = film.people.map((person) => {
        const templatePerson = `
          <div class="card-people">
            <div class="div-img-people">
              <img class="card-people-img" src="${person.img}" alt="${person.name}" name="${person.name}" >
            </div>
            <div class="person-details">
              <h7>${person.name}</h7>
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


const btnFilmPeople = document.querySelectorAll('.btn-film-people');
for (let i = 0; i < btnFilmPeople.length; i++){
  btnFilmPeople[i].addEventListener ('click', () => {
    const filmPeople = ghibli.filmPeople(films, btnFilmPeople[i].value);
    console.log(filmPeople)
    cataloguePeople.innerHTML = printCataloguePeople(filmPeople); 
  });
}

