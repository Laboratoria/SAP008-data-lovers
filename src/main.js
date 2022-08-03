//import { ghibli } from './data.js';
import data from './data/ghibli/ghibli.js';

//console.log(data);

//teste pra puxar imagem e outras coisas do banco e colocar no html (precisa colocar a id no html)
/*const poster = document.querySelector("#img-castle-sky");
const title = document.querySelector("#name-castle-sky")
const posterUm = data.films[0].poster;
const titleUm = data.films[0].title;
poster.innerHTML = "<img src='posterUm'>";
title.innerHTML = titleUm;
console.log (posterUm);*/

//teste pra selecionar todos os filmes (ou outros elementos) ta dando um problema quando faz muito grande
/*for (let i = 0; i < data.films.length; i++) {
  let gender = data.films[i].people[i].gender;
  if (gender == "Female"){
  console.log (gender);
  }
}*/

for (let i = 0; i < data.films.length; i++) {
  let people = data.films[i].people;
  let sum = people.length;
  console.log (data.films[i].title + ' tem ' + sum + ' personagens.');
  } 



