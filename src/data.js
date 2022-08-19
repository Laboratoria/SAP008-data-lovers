import rickAndMortyData from './data/rickandmorty/rickandmorty.js'

const getCharacters = (gender) => {
  let characters = rickAndMortyData.results;
  
  if (gender !== '0') {
    characters = characters.filter(character => {
      return character.gender.toLowerCase() === gender.toLowerCase();
    });
  }
  console.log(typeof gender);
  return characters;
};

export default getCharacters;