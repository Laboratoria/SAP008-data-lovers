import data from "./data/ghibli/ghibli.js"
function getCharacters (movies){
    let characters = []
    for (let i= 0; i<movies.length; i++){
        characters = characters.concat(movies[i].people)
    }
    console.log(characters)
    return characters
}
getCharacters (data.films)

