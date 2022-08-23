// estas funciones son de ejemplo

// export const example = () => {
//  return 'example';
// };

// export const anotherExample = () => {
//  return 'OMG';
// };

//ORDENAR//
export const alphabeticOrder = (data, order) => {
  if (order === "asc") {
  return data.sort((a,b) => {
    const nameA = a.name;
    const nameB = b.name;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }})
  }
  if (order === "desc") {
    return data.sort((a, b) => {
    const nameA = a.name;
    const nameB = b.name;
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }})
  }
}
