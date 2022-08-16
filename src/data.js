
import data from './data/rickandmorty/rickandmorty.js';

 export const example = () => {
  return 'example';
 };

const rickandmorty = data.results;

export const filterData = (filtroSelecionado,array) => {
  const filtro = array.filter(item => item.species === filtroSelecionado)
  return filtro;
};



