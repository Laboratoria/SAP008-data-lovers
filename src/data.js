
export const filterByCriteriaValue = (list, criteria, value) => {
  
  return list.filter(obj => {
    return obj[criteria] === value
  })
}



  export const sortFilms = (films, order, key) => {
    if (order == "a-z") {
      return films.sort(function (a, b) {
        if (a[key] > b[key]) {
          return 1

        }
        if (b[key] > a[key]) {

          return -1

        }

      })

    }
    if (order == "z-a") {
      return films.sort(function (a, b) {
        if (a[key] > b[key]) {
          return - 1

        }
        if (b[key] > a[key]) {

          return 1

        }

      })

    }

  }
  



  


  export function getCharacters(films) {
    let characters = []
    for (let i = 0; i < films.length; i++) {
      characters = characters.concat(films[i].people)

    }
    return characters



  }

 
  //allCharacters,"gender", genderFilterSelec
export const calculoAgregado = (data, key, value) => {
  let qtd = data.reduce((total, valor) => {
    if (valor[key] === value) {
      return total + 1;
    }
    return total;
  }, 0);
  return Number((qtd * 100 / data.length).toFixed(2));
}





