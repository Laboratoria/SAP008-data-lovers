export {rickAndMorty};

// ==== objeto principal com as funções de mostrar cards e filtro =====
const rickAndMorty = {

    // ======= Função de gerar templates ======
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
    function filtrarPorStatus(list, status) {
        //Aqui adicionei no parâmetro o data, pq ele recebe uma lista e ele vai retornar essa lista que ele recebeu filtrada.
        //isso é necessario para fazermos os testes e é o recomendado pelo read.me no src/data.js
        const filtro = list.filter(function(personagem) {
        //Aqui coloquei data pois agora a lista está vindo através do main.js.
        const statusFiltrado = personagem.status.toLowerCase() === status; //Alterei o nome da constante para ficar mais claro de identificarmos
        
        return statusFiltrado; 

    });
        
        return this.displayCards(filtro); //Aqui no retorno esse this significa que ele (o objeto) está se referindo a
        //a ele mesmo, e está retornando o template html da lista filtrada.
        
    },

    // ===== Função de filtro por espécie ====
    filtrarPorEspecie:    
    function filtrarPorEspecie(list, species) {
        const filtro = list.filter(function(personagem) {
            const especieFiltrado = personagem.species.toLowerCase() === species;
            return especieFiltrado;   
        })
        
        return this.displayCards(filtro)

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
//para indicar a função, os === sao para bater o valor identico de tipo e valor

const arrayTest = [
    {
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
    
    },
  
    {
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
      
    },
  
    {
      "status": "Alive",
      "species": "Human",
      "gender": "Female",
    },    
    {
      "status": "Alive",
      "species": "Human",
      "gender": "Female",
      
    } 
  ];
  
const expectedStatus = rickAndMorty.filtrarPorStatus(arrayTest, "Alive");
console.log(expectedStatus)
