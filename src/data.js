export const example = () => {
  return "example";
};

export const filterData = (filtroSelecionado, array) => {
  const filtro = array.filter((item) => item.species === filtroSelecionado);
  return filtro;
};

export const filterData2 = (filtroSelecionado, array) => {
  const filtro = array.filter((item) => item.gender === filtroSelecionado);
  return filtro;
};

export const filterData3 = (filtroSelecionado, array) => {
  const filtro = array.filter((item) => item.status === filtroSelecionado);
  return filtro;
};
