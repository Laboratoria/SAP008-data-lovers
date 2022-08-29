export const filterData = (data, type, condition) => data.filter(item =>{
  return item[type] === condition;
});

export const filterNome =  (data, buscaNome) => data.filter (item => {
  return item.name.toLowerCase().includes(buscaNome.toLowerCase());
});

export const sortByName = (data, order) => {
  if (order === "ordenarAZ") {
  return data.sort((a, b) => a.name < b.name ? -1 : 1)
} else {
  return data.sort((a, b) => a.name > b.name ? -1 : 1)
} 
};
export const computeStats = (data) => {
  return data.length;
}
