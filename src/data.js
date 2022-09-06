import data from "./data/harrypotter/data.js";
//Printando todos na tela
export function createCard(character) {
  return `<card class="card">
  <br><strong>Name: </strong>${character.name}
  </br><strong>Birth: </strong>${character.birth}
  </br><strong>Specie: </strong>${character.species}
  </br><strong>House: </strong>${character.house}
  </br><strong>Gender: </strong>${character.gender}</br>
  </card>`
}
//filtro de casas
export function filterHouse(house, characters = data.characters) {
  return characters.filter((user) => user.house === house);
}
//calculo agregado
export function countCharactersHogwarts(characters = data.characters) {
  return characters.filter((user) => user.house ===
    'Gryffindor' || user.house === 'Ravenclaw' || user.house === 'Slytherin' || user.house === 'Hufflepuff').length
}
//ordenamento
const orderName = (a, b) => {
  if (a.name > b.name) {
    return 1;
  } if (a.name < b.name) {
    return -1;
  }
  return 0
};
export const selectNameAz = (characters) => {
  return characters.sort(orderName);
}
export const selectNameZa = (characters) => {
  return characters.sort(orderName).reverse();
};
//campo de busca
export function filterFind(name, listCharacterHouseFilter) {
  return listCharacterHouseFilter.filter((user) => user.name.toUpperCase().includes(name.toUpperCase()));
}