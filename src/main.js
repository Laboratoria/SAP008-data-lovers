import data from './data/ghibli/ghibli.js';
const people_array = []

for (let film in data["films"]) {

  for (let people in data["films"][film]["people"]) {
    people_array.push(data["films"][film]["people"][people]);
  }

}

for (let p in people_array) {
  let template = document.querySelector(".base-template");
  let copy = template.cloneNode(true);
  copy.classList.remove("base-template");

  let dados = copy.childNodes;

  dados[1].innerHTML = people_array[p].name
  dados[3].src =  people_array[p].img
  dados[6].innerHTML = people_array[p].age
  dados[8].innerHTML = people_array[p].gender
  dados[10].innerHTML = people_array[p].specie

  console.log(dados);

  template.parentNode.appendChild(copy);
}

console.log(people_array);