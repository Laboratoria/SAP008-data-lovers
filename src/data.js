import rickAndMortyData from './data/rickandmorty/rickandmorty.js'

const getCharacters = (gender, status, specie, order) => {
  let characters = rickAndMortyData.results;

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
};

export default getCharacters;