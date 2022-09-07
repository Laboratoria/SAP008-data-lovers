//filtro de casas
export function filterHouse(house, characters) {
  return characters.filter((user) => user.house === house);
}
//calculo agregado
export function countCharactersHogwarts(characters) {
  const houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff" ]
  return characters.filter((user) => houses.includes(user.house) ).length
}

export function calculateCharactersPercentage(total, fraction){
 return parseInt((fraction / total) * 100)
}
//ordenamento
const orderName = (a, b) => {
  if (a.name > b.name) {
    return 1;
  } if (a.name < b.name) {
    return -1;
  } 
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