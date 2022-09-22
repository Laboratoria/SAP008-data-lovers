import data from "./data/ghibli/ghibli.js"

let printaCards = document.querySelector('section#printaCards')
const menu =document.getElementById('menu')

function PrintandoCard(filmsList){
    return `
        <article>
            <p>Title: ${filmsList.title}</p>
            <img src="${filmsList.poster}"/></p>
            <p>Director: ${filmsList.director}</p>
            <p>Release date: ${filmsList.release_date}</p>
        </article>
        `;
}

function montaCard(lista) {
    return lista
        .map((filmsList) => {
            return PrintandoCard(filmsList);
        })
        .join("");
}

printaCards.innerHTML = montaCard(data.films);
