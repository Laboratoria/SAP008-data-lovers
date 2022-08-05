// import { example } from './data.js';
​
import data from './data/ghibli/ghibli.js';
​
// console.log(data);
​
const films = data.films;
// Explorando iterações
// films[0].people.forEach(people => console.log(people.gender))
// films.forEach(films => console.log(films))
// films.forEach(films => console.log(films.title)) 
​
// ========================================
​
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
​
//Teste 2: devolve 20 arrays onde os gênero são acumulados a cada novo filme iterado 
let genderForFilm = [];
for (let film of films){
    for (let people of film.people)
        genderForFilm.push(people.gender);
    console.log(genderForFilm)
}
​
//==========Expllicação==========
// Essa parte abaixo está funcionando para um único filme. 
// A variável genderForFilm pega o gênero de cada personagem do fiml[0]. 
// A função genderCount conatbiliza se tem mais personagens de gênero feminino do que masculino/indefinido.
// A função filterGender usa o método filter para criar um novo array apenas com os personagens de gênero feminino.
//===============================
​
// let genderTotal = 
​
// let genderForFilm = [];
// for (let people of films[0].people){
//     genderForFilm.push(people.gender);
// }
// console.log(genderForFilm)
​
// function genderCount(arr) {
//     if (filterGender(arr, "Female").length > ((arr.length)/2)) {
//         return true; //filmes com mais personagens de gênero feminino
//     } else {
//         return false; //filmes com mais personagens de gênero masculino ou indefinido
//     }
// }
​
// function filterGender (arr, query) {
//     return arr.filter(function(element) { 
//         return element.includes(query);
//     });
// }
​
// console.log(genderCount(genderForFilm));
​