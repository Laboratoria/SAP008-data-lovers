export {rickAndMorty};

// ==== objeto principal com as funções de mostrar cards e filtro =====
const rickAndMorty = {

    // ===== Função de filtro por status ====
    filtrarPorStatus: function (list, status) {
        const filtro = list.filter(function(personagem) {        
            const statusFiltrado = personagem.status.toLowerCase() === status;         
            return statusFiltrado; 

        });             

        return filtro;  
    },

    /*const filtroStatus = filtrarPorStatus();

    media: function (list, status) {
        const tamanhoStatus = status.length;
        const tamanhoTotal = list.length;
        const resultPercentage = (tamanhoStatus * 100)/tamanhoTotal;
        console.log(resultPercentage);

        return resultPercentage;
    };
    media();*/
   
    // ===== Função de filtro por espécie ====
    filtrarPorEspecie: function (list, species) {
        const filtro = list.filter(function(personagem) {
            const especieFiltrado = personagem.species.toLowerCase() === species;
            return especieFiltrado;   

        });

        return filtro;
        
    },

    // ===== Função de filtro por gênero ====
    filtrarPorGenero: function (list, gender) {
        const filtro = list.filter(function(personagem) {
            const generoFiltrado = personagem.gender.toLowerCase() === gender;
            return generoFiltrado;

        });
        return filtro;

    },
    // ===== Função buscar por nome ====
    buscarPorNome: function (list, name) {
        const filtro = list.filter(function(personagem) {
            const buscaFiltrada = personagem.name.toLowerCase().includes(name.toLowerCase());
            return buscaFiltrada;
        });
        return filtro;
    },

    

    // ===== função de porcentagem dos personagens filtrados =====
    
    calcularPorcentagem: function(list, listaFiltrada) {
        const tamanhoList = list.length;        
        const tamanhoListaFiltrada = listaFiltrada.length;        

        const result = Math.round((tamanhoListaFiltrada*100)/tamanhoList);
        
        return result;

    }
    
};  

