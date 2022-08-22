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
    ordenar: function(list, sortBy) {
        if(sortBy === "ascending") {
            return rickAndMorty.ordenarCrescente(list)
        }
        else if(sortBy === "descending" ) {
            return rickAndMorty.ordenarDecrescente(list)
        };

    },

    // ===== Função de ordenar de forma crescente ====
    ordenarCrescente: function(list) {
        const ordem = list.sort(function (a, b) {
            if (a.name === b.name){
                return 0;
            }
            /*return a.name > b.name ? 1 : -1 ;*/

            if (a.name > b.name) {
              return 1;
            }else {
              return -1;
            }            
            
          });          
        return ordem;

    },   
    // ===== Função de ordenar de forma decrescente ====
    ordenarDecrescente: function(list) {
        const ordem = list.sort(function (a, b) {
            if (a.name === b.name){
                return 0;
            }
            /*return a.name > b.name ? 1 : -1 ;*/

            if (a.name > b.name) {
              return -1;
            }else {
              return 1;
            }            
            
          });          
        return ordem;

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
    
    calcularPorcentagem: function(tamanhoList, tamanhoListaFiltrada) {            

        return Math.round((tamanhoListaFiltrada*100)/tamanhoList);
               
    }
    
};  

