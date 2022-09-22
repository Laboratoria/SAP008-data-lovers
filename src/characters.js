import data from "./data/ghibli/ghibli.js"
const printCharacters = document.getElementById("printCharacters");
function generateCharactersMovies(movies){
    let layout = "";
    movies.forEach( movie => {
        movie.people.forEach( p => {
            layout += `<div>
            <p>${p.name}</p>
            <p>${p.age}</p>
            <img id= "imagem" src = "${p.img}"/>
            </div>`
        })
    });
    printCharacters.innerHTML = layout;
}

generateCharactersMovies(data.films)