// import { example } from './data.js';
import data from './data/ghibli/ghibli.js';
// console.log(data);

const films = data.films;
const div_poster = document.getElementsByClassName('poster');
let selectedGender = document.getElementById("filter-gender");

// const genderBtn = document.getElementById('filter-gender');

// selected.addEventListener('clique', )

selectedGender.addEventListener('change', () => {
  genderFilter();
  const cards = document.getElementsByClassName("poster");
  for (let i = 0; i < cards.length; i++) {
      if ((cards[i].classList.contains(selectedGender)) > -1) {
          cards[i].classList.remove("d-none");
      } else {
          cards[i].classList.add("d-none");
      }
  }
});

function genderFilter() { //essa parte cria o array de gênero para cada filme (masculino e feminino)
  for (let i = 0; i < films.length; i++) {
    let genderForFilm = [];
    for (let people of films[i].people){
      genderForFilm.push(people.gender);
    }     
    function genderCount(array) { // essa parte contabiliza se há mais personagens de gênero feminino ou masculino no filme
      if (filterGender(array, 'Female').length > ((array.length)/2)) {
        div_poster = div_poster.setAttribute('class','female');
        // return console.log ("Esse filme tem mais personagens femininos");
      } else {
        div_poster = div_poster.setAttribute('class','male');
        // return console.log ("Esse filme tem mais personagens masculinos");
      }
    }
    
    function filterGender (array, query) { //essa parte filtra os personagens do array criado na genderFilter e cria um novo array apenas com gênero feminino 
      return array.filter (function(element) { 
        return element.includes(query);
      });
    }
  return genderCount(genderForFilm);
  }
}



//==========Expllicação==========
// Essa parte abaixo está funcionando para um único filme. 
// A variável genderForFilm pega o gênero de cada personagem do fiml[0]. 
// A função genderCount conatbiliza se tem mais personagens de gênero feminino do que masculino/indefinido.
// A função filterGender usa o método filter para criar um novo array apenas com os personagens de gênero feminino.
//===============================


// let genderForFilm = [];
// for (let people of films[0].people){
//     genderForFilm.push(people.gender);
// }
// console.log(genderForFilm)


// function genderCount(arr) {
//     if (filterGender(arr, "Female").length > ((arr.length)/2)) {
//         return true; //filmes com mais personagens de gênero feminino
//     } else {
//         return false; //filmes com mais personagens de gênero masculino ou indefinido
//     }
// }
// function filterGender (arr, query) {
//     return arr.filter(function(element) { 
//         return element.includes(query);
//     });
// }
// console.log(genderCount(genderForFilm));




//teste pra selecionar todos os filmes (ou outros elementos) ta dando um problema quando faz muito grande
// for (let i = 0; i < data.films.length; i++) {
//   let gender = data.films[i].people[i].gender;
//   if (gender == “Female”){
//   console.log (gender);
//   }
// }}

//teste pra soma dos personagens
// for (let i = 0; i < data.films.length; i++) {
//   let people = data.films[i].people;
//   let sum = people.length;
//   console.log (data.films[i].title + ' tem ' + sum + ' personagens.');
//   }

// tentar pegar genero de cada filme:
// for (let i = 0; i < films.length; i++) {
//   let people = [films[i].people];
//     for (let i = 0; i < people.length; i++) {
//       let gender = people[i].gender;
//     console.log (gender);

//   }
// }

// Explorando iterações
// films[0].people.forEach(people => console.log(people.gender))
// films.forEach(films => console.log(films))
// films.forEach(films => console.log(films.title)) 
// ========================================
// Teste 1: devolve as informações de gênero separadads por filme
// let genderForFilm = [];
// let genderTotal = [];
// for (let film of films){
//     let genderTotal = []
//     for (let people of film.people)
//         genderForFilm.push(people.gender);
//     genderTotal += genderForFilm;
//     console.log(genderTotal)
// }
//Teste 2: devolve 20 arrays onde os gênero são acumulados a cada novo filme iterado 
// let genderForFilm = [];
// for (let film of films){
//     for (let people of film.people)
//         genderForFilm.push(people.gender);
//     console.log(genderForFilm)