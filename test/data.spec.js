import { sortCharacters } from '../src/data.js';

const personagens = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
  },
  {
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male"
  },
  {
    "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
  },

]

describe('funcao sort', () => {
  it('is a function', () => {
    expect(typeof sortCharacters).toBe('function');
  });

  it('returns `personagens ordenados em ordem crescente`', () => {
    expect(sortCharacters(personagens, 'crescente')).toEqual([personagens[2], personagens[0], personagens[1]]);
  });
});


describe('funcao sort', () => {
  it('is a function', () => {
    expect(typeof sortCharacters).toBe('function');
  });

  it('returns `personagens ordenados em orderm decrescrente`', () => {
    expect(sortCharacters()).toEqual([personagens[2], personagens[0], personagens[1]]);
  });
});



