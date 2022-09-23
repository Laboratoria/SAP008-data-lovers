import data from "./data/ghibli/ghibli.js"
const printCharacters = document.getElementById("printCharacters");
function generateCharactersMovies(movies){
    let layout = "";
    movies.forEach( movie => {
        movie.people.forEach( p => {
            layout += `<div>
            <p> Name: ${p.name}</p>
            <img id= "imagem2" src = "${p.img}"/>
            <p> Age: ${p.age}</p>
            <p> Genre: ${p.genre}</p>
            <p> Specie ${p.specie}</p>
            </div>`
        })
    });
    printCharacters.innerHTML = layout;
}

generateCharactersMovies(data.films)