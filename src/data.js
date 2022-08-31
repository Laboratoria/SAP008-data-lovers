export const orderCrescente = (a, b) => {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
};

export const ordemDecrescente = (a, b) => {
  return b.name < a.name ? -1 : b.name > a.name ? 1 : 0;
};
