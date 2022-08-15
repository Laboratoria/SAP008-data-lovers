import data from "./data/rickandmorty/rickandmorty.js";



export const filtrarPorStatus = (status) => {
    const filtro = data.results.filter(personagem => personagem.status.toLowerCase() === status)
    return filtro
};

export const filtrarPorEspecie = (species) => {
    const filtro = data.results.filter(personagem => personagem.species.toLowerCase() === species)
    return filtro
};

export const filtrarPorGenero = (gender) => {
    const filtro = data.results.filter(personagem => personagem.gender.toLowerCase() === gender)
    return filtro
};



//Criei uma constante que é uma funcáo, onde passei o parametro que quero que seja filtrado, que nesse caso é o status
// essa arrow function indica que aqui dentro vai ter uma cocndicao que vai ser necessaria para filtrar cada elemento dentro da array.
// obs - .filter também é um loop que percorre todos os elementos do array.
// pedi para retornar essa condiçao em forma de filtro, onde estou acessando o elemento personagem dentro do array,
//ai coloquei personagem.status.toLowerCase (coloquei tolowercase, strings minusculas) para facilitar a validacao junto com ()
//para indicar a função, os === sao para bater o valor identico de tipo e valor.
//