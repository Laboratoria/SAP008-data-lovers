//SORT//
// SORT CHARACTERS//
export const alphabeticOrderChars = (data, order) => {
  if (order === "asc_name") {
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
  if (order === "desc_name") {
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


//   SORT MOVIES    //
// SORT BY A-Z / Z-A//
export const alphabeticOrderMovies = (data, order) => {
  if (order === "asc_title") {
  return data.sort((a,b) => {
    const titleA = a.title;
    const titleB = b.title;
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }})
  }
  if (order === "desc_title") {
    return data.sort((a, b) => {
    const titleA = a.title;
    const titleB = b.title;
    if (titleA > titleB) {
      return -1;
    }
    if (titleA < titleB) {
      return 1;
    }})
  }
}

// SORT BY SCORE//
export const scoreOrder = (data, order) => {
  if (order === "asc_score") {
      return data.sort((a, b) => {
    if (a.rt_score > b.rt_score) {
      return 1;
    }
    if (a.rt_score < b.rt_score) {
      return -1;
    }
    return 0;
  })}

  if (order === "asc_score") {
      return data.sort((a, b) => {
    if (a.rt_score > b.rt_score) {
      return 1;
    }
    if (a.rt_score < b.rt_score) {
      return -1;
    }
    return 0;
  })}
}

// SEARCH//

//SEARCH CHARACTERS//

export const searchName = (data, condition) => {
  const resultSearch = data.filter((character) => character.name.toLowerCase().includes(condition.toLowerCase()));
  return resultSearch;
};

//SEARCH MOVIES//

export const searchTitle = (data, condition) => {
  console.log(data, condition)
  const resultSearch = data.filter((films) => films.title.toLowerCase().includes(condition.toLowerCase()));
  return resultSearch;
};


