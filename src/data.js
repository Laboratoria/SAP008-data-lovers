import rickAndMortyData from './data/rickandmorty/rickandmorty.js'

const getCharacters = (gender, status, specie, order, name) => {
  let characters = rickAndMortyData.results;

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

  if (name !== ' ') {
    characters = characters.filter(character => {
      return character.name.includes(name);
    })
  }
  return characters;
};

export default getCharacters;