import data from "./data/harrypotter/data.js";
export function createCard(character) {
  return `<card class="card">
  <br><strong>Name: </strong>${character.name}
  </br><strong>Birth: </strong>${character.birth}
  </br><strong>Specie: </strong>${character.species}
  </br><strong>House: </strong>${character.house}
  </br><strong>Gender: </strong>${character.gender}</br>
  </card>`
}
export function filterHouse(house) {
  return data.characters.filter((user) => user.house === house);
}
export function countCharactersHogwarts() {
  return data.characters.filter((user) => user.house ===
    'Gryffindor' || user.house === 'Ravenclaw' || user.house === 'Slytherin' || user.house === 'Hufflepuff').length
}
export function filterFind(name, listCharacterHouseFilter) {
  return listCharacterHouseFilter.filter((user) => user.name.includes(name));
}
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
