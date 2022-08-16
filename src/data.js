
import data from './data/rickandmorty/rickandmorty.js';

 export const example = () => {
  return 'example';
 };

const rickandmorty = data.results;

export const filterData = (species) => {
  const filtro = rickandmorty.filter(item => item.species === species)
  return filtro;
};



