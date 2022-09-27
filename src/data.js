
export const filterByCriteriaValue = (list, criteria, value) => {
  
  return list.filter(obj => {
    return obj[criteria] === value
  })
}





/*export const filterPersonagens = (films, criterio, valor) => {
  console.log(films, criterio, valor)
  return films.filter(people => {
    return people[criterio] === valor
  })
}*/


  export const sortFilms = (films, order) => {
    if (order == "a-z") {
      return films.sort(function (a, b) {
        if (a.title > b.title) {
          return 1

        }
        if (b.title > a.title) {

          return -1

        }

      })

    }
    if (order == "z-a") {
      return films.sort(function (a, b) {
        if (a.title > b.title) {
          return - 1

        }
        if (b.title > a.title) {

          return 1

        }

      })

    }

  }
  



  

  export function printFilmsCards(data) {
    return data.map((item) =>
      `

  <div class="cards">
    <div class="cardFlip">
      <div class="front">
        <figure>
          <img src = "${item.poster}" class = "poster">
        </figure>
      </div>
      <div class="back">
        <p class = "titles"><strong>${item.title} </strong></p>
        <p class = "infoFilms"><strong>Release Date: </strong>${item.release_date}</p>
        <p class = "infoFilms"><strong>Description: </strong>${item.description}</p>
        <p class = "infoFilms"><strong>Director: </strong>${item.director}<p>
        <p class = "infoFilms"><strong>Producer: </strong>${item.producer}<p>
        <p class = "infoFilms"><strong>Score: </strong>${item.rt_score}<p>
      </div>
     </div>
    </div>
    


    `
    )
      .join('');

  }

  export function getCharacters(films) {
    let characters = []
    for (let i = 0; i < films.length; i++) {
      characters = characters.concat(films[i].people)

    }
    return characters



  }

 





