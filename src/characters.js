import { filterData } from './data.js'
import data from './data/ghibli/ghibli.js'

const movies = data.films

const gallery = document.getElementById("cards-characters")
const Persons = (personList, movie) => {

  let charactersCards = ''
  personList.forEach(person => {
    charactersCards +=
      ` 
      <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="box-image">
            <img class="image" src="${person.img}" alt="${person.name}"/>
          </div>
          <h1>${person.name}</h1>
        </div> 
        <div class="flip-card-back">
          <ul class="info">
            <li>Age: ${person.age}</li>
            <li>Gender: ${person.gender}</li>
            <li>Specie: ${person.specie}</li>
          </ul>
          <h4>Movie:</h4>
          <h3>${movie}</h3>
          <img class="img-back" src="${person.img}"/>
        </div>
      </div>
   </div>
  `
  })

  gallery.innerHTML += charactersCards
}

for (let movie of movies) {
  let personList = movie.people
  Persons(personList, movie.title)
}

const imageValidated = () => {

  let arrayImages = document.querySelectorAll(".image, .img-back")

  for (let image of arrayImages ) {
    const url = image.getAttribute("src")
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.status === 404) {
        image.setAttribute("src", "./assets/image/gifHome.webp")
      }
    };
    xhr.open('HEAD', url, true);
    xhr.send();
  }
}
imageValidated()



const generalFilter = () => {
  gallery.innerHTML = ""
  const genderSelected = filterGender.options[filterGender.selectedIndex]
  const genderValue = genderSelected.value

  const movieSelected = filterMovie.options[filterMovie.selectedIndex]
  const movieText = movieSelected.text
  const movie = movies.find(value => value.title == movieText)


  if (movie !== undefined) {
    if (genderValue != "All") {
      Persons(genderFilter(movie, genderValue), movie.title)


    } else {
      const people = movie.people
      Persons(people, movie.title)
    }

  } else {
    if (genderValue === "All") {
      movies.forEach(movie => {
        const personList = movie.people
        Persons(personList, movie.title)
      })
    } else {
      let genderList
      movies.forEach(movie => {
        genderList = genderFilter(movie, genderValue)
        Persons(genderList, movie.title)
      })
    }
  }
  imageValidated()
}
const genderFilter = (movie, gender) => {
  let personList = movie.people
  let list = filterData(personList, "gender", gender)
  return list
}

const filterGender = document.getElementById("filter-gender")
const filterMovie = document.getElementById("filter-movie")

filterGender.addEventListener("change", () => {
  generalFilter()
})

const arrayTitles = movies.map(movie => movie.title)

arrayTitles.forEach(title => {
  filterMovie.innerHTML += `<option class="title">${title}</option>`
})

filterMovie.addEventListener("change", () => {
  generalFilter()
})
