export const orderCrescente = (a, b) => {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
};

export const ordemDecrescente = (a, b) => {
  return b.name < a.name ? -1 : b.name > a.name ? 1 : 0;
};

export const filterArr = (arr, prop, value) => {
  return arr.filter((filter) => {
    return filter[prop] === value;
  });
};

export const porcentagemCal = (listaInteira, listaFiltrada) => {
  return Math.round((listaInteira * 100) / listaFiltrada) + "%";
};
