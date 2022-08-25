import { mainFilters } from '../src/data.js'

const charactersData = [{
  "id": 622,
  "name": "Bellatrix Lestrange",
  "birth": "1951",
  "death": "2 May, 1998 (aged 46 - 47)",
  "species": "Human",
  "ancestry": "Pure-blood",
  "gender": "Female",
  "hair_color": "Black",
  "eye_color": null,
  "wand": "12¾\", Walnut, dragon heartstring",
  "patronus": "None",
  "house": "House of Black",
  "associated_groups": [],
  "books_featured_in": [4, 5, 6, 7]
},
{
  "name": "Luna Lovegood",
  "house": "Ravenclaw"
},
{
  "name": "Albus Dumbledore",
  "house": "Gryffindor"
},
{
  "name": "Severus Snape",
  "house": "Slytherin"
},
{
  "name": "Sirius Black",
  "house": "Gryffindor"
},
{
  "name": "Cedric Diggory",
  "house": "Hufflepuff"
}, 
{
  "name": "Harry Potter",
  "house": "Gryffindor"
},
{
  "name": "Albus Potter",
  "house": "Slytherin"
}]

const booksData = [{
    "title": "Harry Potter and the Prisoner of Azkaban",
  },
  {
    "title": "Harry Potter and the Half-Blood Prince",
  }]

  const spellsData = [{
    "name": "Wingardium Leviosa",
    "spell_type": "Charm",
  }, 
  {
    "name": "Toenail-growing hex",
    "spell_type": "Hex",
  }]


describe('mainFilters', () => {
  it('should be an object', () => {
    expect(typeof mainFilters).toBe('object');
  });

});

describe('mainFilters.displayCharactersList', () => {

  it('should be a function', () => {
    expect(typeof mainFilters.displayCharactersList).toBe('function');
  });

  it('should return 08 characters', () => {
    expect(mainFilters.displayCharactersList(charactersData).length).toBe(8)
  })

  it('should return Bellatrix Lestrange', () => {
    expect(mainFilters.displayCharactersList(charactersData).includes('Bellatrix Lestrange')).toBe(true)
  })

});

describe('mainFilters.displayBooksList', () => {

  it('should be a function', () => {
    expect(typeof mainFilters.displayBooksList).toBe('function');
  });

  it('should return 2 books', () => {
    expect(mainFilters.displayBooksList(booksData).length).toBe(2)
  })

  it('should return Harry Potter and the Prisoner of Azkaban', () => {
    expect(mainFilters.displayBooksList(booksData).includes('Harry Potter and the Prisoner of Azkaban')).toBe(true)
  })

});

describe('mainFilters.displaySpellsList', () => {

  it('should be a function', () => {
    expect(typeof mainFilters.displaySpellsList).toBe('function');
  });

  it('should return 2 spells', () => {
    expect(mainFilters.displaySpellsList(spellsData).length).toBe(2)
  })

  it('should return Wingardium Leviosa', () => {
    expect(mainFilters.displaySpellsList(spellsData).includes('Wingardium Leviosa')).toBe(true)
  })

});

describe('mainFilters.filterCharactersByHouses', () => {
  it('should be a function', () => {
    expect(typeof mainFilters.filterCharactersByHouses).toBe('function')
  });

  it('should return Albus Dumbledore, Sirius Black and Harry Potter from house Gryffindor', () => {
    const gryffindorCharacters = mainFilters.filterCharactersByHouses(charactersData, 'Gryffindor')
    expect(gryffindorCharacters[0].name).toEqual('Albus Dumbledore')
    expect(gryffindorCharacters[1].name).toEqual('Sirius Black')
    expect(gryffindorCharacters[2].name).toEqual('Harry Potter')
  });

  it('should return Severus Snape and Albus Potter from house Slytherin', () => {
    const slytherinCharacters = mainFilters.filterCharactersByHouses(charactersData, 'Slytherin')
      expect(slytherinCharacters[0].name).toEqual('Severus Snape')
      expect(slytherinCharacters[1].name).toEqual('Albus Potter')
  });

  it('should return Luna Lovegood from house Ravenclaw', () => {
    const ravenclawCharacters = mainFilters.filterCharactersByHouses(charactersData, 'Ravenclaw')
      expect(ravenclawCharacters[0].name).toEqual('Luna Lovegood')
  });

  it('should return Cedric Diggory from house Hufflepuff', () => {
    const hufflepuffCharacters = mainFilters.filterCharactersByHouses(charactersData, 'Hufflepuff')
      expect(hufflepuffCharacters[0].name).toEqual('Cedric Diggory')
  });

  it('should return 03 characters from house Gryffindor', () => {
    const gryffindorCharacters = mainFilters.filterCharactersByHouses(charactersData, 'Gryffindor')
      expect(gryffindorCharacters.length).toBe(3)
  });

  it('should return 02 characters from house Slytherin', () => {
    const gryffindorCharacters = mainFilters.filterCharactersByHouses(charactersData, 'Slytherin')
      expect(gryffindorCharacters.length).toBe(2)
  });
});
