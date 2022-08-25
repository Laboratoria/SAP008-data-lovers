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
  "house": "Ravenclaw",
},
{
  "name": "Albus Dumbledore",
  "house": "Gryffindor",
},
{
  "name": "Severus Snape",
  "house": "Slytherin",
},
{
  "name": "Cedric Diggory",
  "house": "Hufflepuff",
}, 
{
  "name": "Harry Potter",
  "house": "Gryffindor",
}]

const booksData = [{
  
    "id": 3,
    "title": "Harry Potter and the Prisoner of Azkaban",
    "releseDay": "July 8, 1999",
    "author": "J. K. Rowling",
    "description": "Harry's third year of studies at Hogwarts is threatened by Sirius Black's escape from Azkaban prison. Apparently, it is a dangerous wizard who was an accomplice of Lord Voldemort and who will try to take revenge on Harry Potter."
  },

  {
    "id": 6,
    "title": "Harry Potter and the Half-Blood Prince",
    "releaseDay": "July 16, 2005",
    "author": "J. K. Rowling",
    "description": "Harry discovers a powerful book and, while trying to discover its origins, collaborates with Dumbledore in the search for a series of magical objects that will aid in the destruction of Lord Voldemort."
  }]

  const spellsData = [{
    "id": 305,
    "name": "Wingardium Leviosa",
    "other_name": "Levitation Charm",
    "pronunciation": "win-GAR-dee-um lev-ee-OH-sa",
    "spell_type": "Charm",
    "description": "Makes objects fly, or levitate.",
    "mention": "This spell is taught in early first-year charms classes; this came into good use later in that year, when Ron Weasley performed the spell to knock out a mountain troll; six years later, Harry uses the charm to levitate the side-car of his godfather's flying motorbike; Ron used it again this year to make a twig poke a tree.",
    "etymology": "\"Wingardium\" almost certainly contains English wing, meaning \"fly\". \"Leviosa\" probably originates from Latin levis, meaning \"light\".",
    "note": null
  }, 
  {
    "id": 285,
    "name": "Toenail-growing hex",
    "other_name": null,
    "pronunciation": null,
    "spell_type": "Hex",
    "description": "Causes the toenails to grow at an extreme and uncontrollable rate.",
    "mention": "In 1996, Harry used this to much applause from classmates, on Vincent Crabbe.",
    "etymology": null,
    "note": "This is a hex that is probably not approved by the Ministry of Magic, as it was invented by Severus Snape."
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

  it('should return 06 characters', () => {
    expect(mainFilters.displayCharactersList(charactersData).length).toBe(6)
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

  it('should return Albus Dumbledore and Harry Potter from house Gryffindor', () => {
    const gryffindorCharacters = mainFilters.filterCharactersByHouses(charactersData, 'Gryffindor')
    expect(gryffindorCharacters[0].name).toEqual('Albus Dumbledore')
    expect(gryffindorCharacters[1].name).toEqual('Harry Potter')
  });

  it('should return Severus Snape from house Slytherin', () => {
    const slytherinCharacters = mainFilters.filterCharactersByHouses(charactersData, 'Slytherin')
      expect(slytherinCharacters[0].name).toEqual('Severus Snape')
  });

  it('should return Luna Lovegood from house Ravenclaw', () => {
    const ravenclawCharacters = mainFilters.filterCharactersByHouses(charactersData, 'Ravenclaw')
      expect(ravenclawCharacters[0].name).toEqual('Luna Lovegood')
  });

  it('should return Cedric Diggory from house Hufflepuff', () => {
    const hufflepuffCharacters = mainFilters.filterCharactersByHouses(charactersData, 'Hufflepuff')
      expect(hufflepuffCharacters[0].name).toEqual('Cedric Diggory')
  });

  it('should return 02 characters from house Gryffindor', () => {
    const gryffindorCharacters = mainFilters.filterCharactersByHouses(charactersData, 'Gryffindor')
      expect(gryffindorCharacters.length).toBe(2)
  });
});
