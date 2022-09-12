import data from "./data/ghibli/ghibli.js"
//* importei do arquivo ghibli.js para o main
function getCharacters(data) {
    let lista_de_personagens = []

    //* criei a função para acessar a lista de personagens e declarei a variavel
    //* a partir disso, crio o contador que irá iterar sobre a lista acessando a lista filmes
    //*dentro da lista de personagens, ele irá iterar os personagens.

    for (let contador = 0; contador < data.films.length; contador++) {
        let filme_atual = data.films[contador];

        for (let contador_people = 0; contador_people < filme_atual.people.length; contador_people++) {
            lista_de_personagens.push({ "movie": filme_atual.title, ...filme_atual.people[contador_people] })
        }
    }

    //* somo a iteração com o titulo do filme, para trazer os dados dos personagens + titulo
    return lista_de_personagens
    //* retorno a lista com o titulo
}

function printCharacter(data) {
    const cards = document.getElementById('cards');

    //* aqui eu chamo a função declarada acima e linko ela com a pagina de personagens
    for (let contador_print = 0; contador_print < data.length; contador_print++) {
        let new_element = document.createElement("section")
        new_element.innerHTML = `
            <p>Nome: ${data[contador_print].name}</p><br>
            <p>Filme: ${data[contador_print].movie}</p><br>
            <p>image: <img src="${data[contador_print].img}"/></p><br>
            <p>Gênero: ${data[contador_print].gender}</p><br>
            <p>Idade: ${data[contador_print].age}</p><br>
            <p>Espécie: ${data[contador_print].specie}</p><br>
                        
        `;
        cards.appendChild(new_element);
    }
}
//* aqui eu declaro quais os dados que eu quero acessar dentro da section, então
//* todos os dados acessados, são repassados para o cards
const lista_bruta = getCharacters(data);
//* consolidado de dados para printar o card
printCharacter(lista_bruta);
//*chamando a função declarada em printcharacters.