// estas funciones son de ejemplo

// export const example = () => {
//  return 'example';
// };

// export const anotherExample = () => {
//  return 'OMG';
// };

//ORDENAR//
// ORDENAR PERSONAGENS//
export const alphabeticOrderChars = (data, order) => {
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

// ORDENAR FILMES//
export const alphabeticOrderMovies = (data, order) => {
  if (order === "asc") {
  return data.sort((a,b) => {
    const tittleA = a.tittle;
    const tittleB = b.tittle;
    if (tittleA < tittleB) {
      return -1;
    }
    if (tittleA > tittleB) {
      return 1;
    }})
  }
  if (order === "desc") {
    return data.sort((a, b) => {
    const tittleA = a.tittle;
    const tittleB = b.tittle;
    if (tittleA > tittleB) {
      return -1;
    }
    if (tittleA < tittleB) {
      return 1;
    }})
  }
}

// ORDENAR POR NOTA DE AVALIACAO//
export const score = (data, order) => {
  if (order === "asc") {
      return data.sort((a, b) => {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  })}

  if (order === "asc") {
      return data.sort((a, b) => {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  })}
}

