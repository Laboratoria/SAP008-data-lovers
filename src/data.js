export const example = () => {
  return 'example';
};





export const filterData = (filtroSelecionado, array) => {
  const filtro = array.filter(item => item.species === filtroSelecionado)
  return filtro;
};


