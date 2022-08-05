// import { example } from './data.js';
import data from './data/ghibli/ghibli.js';
// console.log(data);

let films = data.films;
for (let i = 0; i < films.length; i++) {
  // console.log (films[i].title);
  
  let genderForFilm = [];
  for (let people of films[i].people){
    genderForFilm.push(people.gender);
  } 
  // console.log(genderForFilm)
  
  function genderCount(arr) {
    if (filterGender(arr, "Female").length > ((arr.length)/2)) {
      return console.log ("Esse filme tem mais personagens femininos")
    } else {
      return console.log ("Esse filme tem mais personagens masculinos")
    }
  }
  function filterGender (arr, query) {
    return arr.filter (function(element) { 
      return element.includes(query);
  });
}
console.log(genderCount(genderForFilm));
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