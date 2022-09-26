import data from "./data/ghibli/ghibli.js"

function extraindoListas(filmsList) {
    let x = filmsList.map ((films) => films.release_date);
    return new Set(x);
}

extraindoListas(data.films);

function PrintandoCard(filmsList) {
    return `
        <article>
            <p>Title: ${filmsList.title}</p>
            <img id= "imagem1" src="${filmsList.poster}"/></p>
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

