import data from "./data/ghibli/ghibli.js"

let filtros = document.querySelector('div#filtros');
let printaCards = document.querySelector('section#printaCards')

function cardTemplate(data) {
    return `
        <acticle>
            <p>Nome: ${data.name}</p>
            <p>Filme: ${data.movie}</p>
            <p>image: <img src="${data.img}"/></p>
            <p>Gênero: ${data.gender}</p>
            <p>Idade: ${data.age}</p>
            <p>Espécie: ${data.specie}</p>
        </acticle>
        `;
}

function montaCard(lista) {
    return lista
        .map((data) => {
            return cardTemplate(data);
        })
}

printaCards.innerHTML = montaCard(data.films);