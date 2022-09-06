export const filtrarGenero = (array, gender) => array.filter(personagem => {
    return personagem.gender == gender
})

export const filtrarNome = (array, name) => array.filter(personagem => {
    return personagem.name == name
})

export const filtrarEspecie = (array, species) => array.filter(personagem => {
    return personagem.species == species
})

export const filtrarStatus = (array, status) => array.filter(personagem => {
    return personagem.status == status
})

export const filtrarOrigin = (array, origin) => array.filter(personagem => {
    return personagem.origin == origin
})
