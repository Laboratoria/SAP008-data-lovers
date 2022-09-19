export const filtrarGenero = (array, gender) => array.filter(personagem => {
    return personagem.gender == gender
})

export const filtrarEspecie = (array, species) => array.filter(personagem => {
    return personagem.species == species
})

export const filtrarStatus = (array, status) => array.filter(personagem => {
    return personagem.status == status
})

export const ordenarPersonagens = (characters, order) => {
    if (order == "A-Z") {
        return characters.sort((a, b) => {
            if (a.name > b.name) {
                return 1
            }
            if (b.name > a.name) {
                return -1
            }
            return 0;
        })
    }
    if (order == "Z-A") {
        return characters.sort((a, b) => {
            if (a.name < b.name) {
                return 1
            }
            if (b.name < a.name) {
                return -1
            }
            return 0;
        })
    }
};

export function calculoAgregado(total, porcentagem) {
    return Math.round((porcentagem * 100) / total);
}

