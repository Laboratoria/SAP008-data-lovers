export {rickAndMorty};

// ==== objeto principal com as funções de mostrar cards e filtro =====
const rickAndMorty = {
    // ======= Função de mostrar cards na tela ======
    displayCards:
    function displayCards(cardsList) {
        const arrayResults = cardsList.map((item) => {
            const template = `
            <div class="card">
    
                <img class="poster-img" src="${item.image}" alt="${item.name}">
    
                <ul class="card-text" style="list-style: none">                       
                <li>Name: ${item.name}</li>
                <li>Status: ${item.status}</li>
                <li>Species: ${item.species}</li>
                <li>Gender: ${item.gender}</li>
                <li>Location: ${item.origin.name}</li>
               
                </ul>                
    
            </div>
            `;
            return template;
        });
        return arrayResults.join("");
    },  

    // ===== Função de filtro por status ====
    filtrarPorStatus:    
    function filtrarPorStatus(status) {
    const filtro = status.filter((status) => personagem.status.toLowerCase() === status)
    return filtro
    },

    // ===== Função de filtro por espécie ====
    filtrarPorEspecie:    
    function filtrarPorEspecie(species) {
        const filtro = data.results.filter(personagem => personagem.species.toLowerCase() === species);
        return filtro;   
    },

    // ===== Função de filtro por gênero ====
    filtrarPorGenero:    
    function filtrarPorGenero (gender) {
        const filtro = data.results.filter(personagem => personagem.gender.toLowerCase() === gender)
        return filtro
    }

};
    

//Criei uma constante que é uma funcáo, onde passei o parametro que quero que seja filtrado, que nesse caso é o status
// essa arrow function indica que aqui dentro vai ter uma cocndicao que vai ser necessaria para filtrar cada elemento dentro da array.
// obs - .filter também é um loop que percorre todos os elementos do array.
// pedi para retornar essa condiçao em forma de filtro, onde estou acessando o elemento personagem dentro do array,
//ai coloquei personagem.status.toLowerCase (coloquei tolowercase, strings minusculas) para facilitar a validacao junto com ()
//para indicar a função, os === sao para bater o valor identico de tipo e valor.
//