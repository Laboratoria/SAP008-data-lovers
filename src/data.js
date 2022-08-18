export {rickAndMorty};

// ==== objeto principal com as funções de mostrar cards e filtro =====
const rickAndMorty = {

    // ===== Função de filtro por status ====
    filtrarPorStatus:    
    function filtrarPorStatus(list, status) {
        const filtro = list.filter(function(personagem) {        
            const statusFiltrado = personagem.status.toLowerCase() === status;         
            return statusFiltrado; 

        });

        return filtro;      
    },

    // ===== Função de filtro por espécie ====
    filtrarPorEspecie:    
    function filtrarPorEspecie(list, species) {
        const filtro = list.filter(function(personagem) {
            const especieFiltrado = personagem.species.toLowerCase() === species;
            return especieFiltrado;   

        });

        return filtro;
    },

    // ===== Função de filtro por gênero ====
    filtrarPorGenero:    
    function filtrarPorGenero (list, gender) {
        const filtro = list.filter(function(personagem) {
            const generoFiltrado = personagem.gender.toLowerCase() === gender;
            return generoFiltrado

        });
        return filtro;

    },

    buscarPorNome: function (list, name) {
        const filtro = list.filter(function(personagem) {
            const generoFiltrado = personagem.name.toLowerCase().includes(name.toLowerCase());
            return generoFiltrado
        });
        return filtro;
    }
};  

