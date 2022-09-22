import data from "./data/ghibli/ghibli.js"

let filtros = document.querySelector('div#filtros');
let printaCards = document.querySelector('section#printaCards')

function cardTemplate(obj) {
    return `
        <acticle>
            <p>Nome: ${obj.name}</p>
            <p>Filme: ${obj.movie}</p>
            <p>image: <img src="${obj.img}"/></p>
            <p>Gênero: ${obj.gender}</p>
            <p>Idade: ${obj.age}</p>
            <p>Espécie: ${obj.specie}</p>
        </acticle>
        `;
}

function montaCard(lista) {
    return lista
        .map((obj) => {
            return cardTemplate(obj);
        })
}

printaCards.innerHTML = montaCard(data.films);