
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
      if (order === 'crescente') {
        if (a.name > b.name) {
          return 1;
        } else {
        return -1;
      }
      } else if (order === 'decrescente') {
        if (a.name > b.name) {
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


 