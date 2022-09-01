
export const filterCharacters = (characters, key, value) => {
  if (value !== '0') {
    characters = characters.filter(character => {
      return character[key].toLowerCase() === value.toLowerCase();
    });
  }
  return characters;
} 

export const sortCharacters = (characters, order) => {
  if (order !== '0') {      
    characters = characters.sort((a, b) => {
      if (a.name > b.name) {
        if (order === 'crescente') {
          return 1;
        } else {
          return -1;
        }
      } else {
        if (order === 'crescente') {
          return -1;
        } else {
          return 1;
        }
      }
    });
  }
  return characters;
}

export const searchCharacters = (characters, name) => {
  if (name !== ' ') {
    characters = characters.filter(character => {
      return character.name.toLowerCase().includes(name.toLowerCase());
    })
  }
  return characters;
  
}

const getCharacters = (gender, status, specie, order, name) => {
  let characters = rickAndMorty.results;
  

  //=== Filtros ===//

  if (status !== '0') {
    characters = characters.filter(character => {
      return character.status.toLowerCase() === status.toLowerCase();
    });
  }
  if (gender !== '0') {
    characters = characters.filter(character => {
      return character.gender.toLowerCase() === gender.toLowerCase();
    });
  }
  if (specie !== '0') {
    characters = characters.filter(character => {
      return character.species.toLowerCase() === specie.toLowerCase();
    });
  }
  //=== Ordenação ====//

  if (order !== '0') {       //se order for diferente de 0 deve retornar//
    characters = characters.sort((a, b) => {
      if (a.name > b.name) {
        if (order === 'crescente') {
          return 1;
        } else {
          return -1;
        }
      } else {
        if (order === 'crescente') {
          return -1;
        } else {
          return 1;
        }
      }
    });
  }
//=== Busca pelo nome ===//

  if (name !== ' ') {
    characters = characters.filter(character => {
      return character.name.toLowerCase().includes(name.toLowerCase());
    })
  }
//=== Calculo porcentagem ===/

  return characters;
  
};

