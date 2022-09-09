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

export const orderFunction = (characters, order) => {
    if(order=="A-Z"){
      return characters.sort((a,b)=>{
        if(a.name > b.name){
          return 1
        }
        if(b.name > a.name){
          return -1
        }
      })
    }
    if(order=="Z-A"){
      return characters.sort((a,b)=>{
        if(a.name < b.name){
          return 1
        }
        if(b.name < a.name){
          return -1
        }
        console.log(orderFunction)
      })
    }
  };

   /* export const ordemAZ = (characters) => 
    characters.sort((a,b) => 0)

    export const ordemZA = (characters) => 
    characters.sort((a,b) => 0)

    ordemAZ(gerarCards)
    console.log(ordemAZ)*/