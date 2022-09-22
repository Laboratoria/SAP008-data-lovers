import data from "./data/ghibli/ghibli.js"
const printCharacters = document.getElementById("printCharacters");
function generateCharactersMovies(movies){
    let layout = "";
    movies.forEach( movie => {
        movie.people.forEach( p => {
            layout += `<div>
            <img src = "${p.img}"/>
            <p>${p.name}</p>
            </div>`
        })
    });
    printCharacters.innerHTML = layout;
}

generateCharactersMovies(data.films)