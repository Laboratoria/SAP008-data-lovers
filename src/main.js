import { example } from './data.js';
// // import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// // import data from './data/rickandmorty/rickandmorty.js';

// console.log(example, data);

// import { imgPosters } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

// console.log(data);

const ghibli = data.films
const films = Object.values(ghibli)

films.forEach((film) => console.log(film))

// console.log(films[0].people)

// films.forEach((film) => console.log(film)) // exibe todos os films

const countUnique = (arr) => {
    return new Set(arr).size;
}

console.log(countUnique(films[0].people)) //contagem dos people/locations/vehicles por filme

// console.log(countUnique(films[0].people[0].gender))

var genderResult = {}

for(let {gender, name} of films[0].people)
  genderResult[name] = {
      name,
      gender,
      count: genderResult[name] ? genderResult[name].count + 1 : 1
  }      

let result = Object.values(genderResult)

console.log(result)

