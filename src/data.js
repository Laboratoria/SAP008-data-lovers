export function filterData(array, property, value) { //filtra dados
  return array.results.filter(elem => elem[property] === value) //.filter somente acessa arrays. para acessar objetos, usamos "." (literal, como em .results)
};