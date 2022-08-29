import {sortByAZ, sortByZA,filterData, filterName} from '../src/data.js';

const characters = [
  { 
    "id": 1,
   "name": "Rick Sanchez",
   "status": "Alive",
   "species": "Human",
   "gender": "Male",
  },
{
    "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "gender": "Female", 
  },
  {
    "id": 13,
    "name": "Alien Googah",
    "status": "unknown",
    "species": "Alien",
    "gender": "unknown", 
  }
  
]

describe("sortByAZ", () => {
  it('is a function', () => {
    expect(typeof sortByAZ).toBe('function');
  });

  it('deve ordenar um array por ordem alfabética', () => {
    const ordenado = sortByAZ(characters)    
    expect(ordenado.length).toBe(characters.length);
    expect(ordenado).toBe([characters[2], characters[0], characters[1]]);
  });
});

describe("sortByZA", () => {
  it('is a function', () => {
    expect(typeof sortByZA).toBe('function');
  });

  it('deve ordenar um array pela ordem de Z a A', () => {
    const sortByZA = sortByAZ(characters).reverse();   
    expect(sortByZA).toBe([characters[1], characters[0], characters[2]]);
  });
});

describe("filterData", () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('deve filtrar pelo os dados de gender, status e species', () => {
    const filtrar = filterData(characters);   
    expect(filtrar.length).toBe(characters.length);
    expect(filtrar).toBe([characters["gender"]]);
    expect(filtrar).toBe([characters["status"]]);
    expect(filtrar).toBe([characters["species"]]);
  });
});

describe("filterName", () => {
  it('is a function', () => {
    expect(typeof filterName).toBe('function');
  });

  it('deve pesquisar pelo nome', () => {
    const pesquisar = filterName(characters);   
    expect(pesquisar.length).toBe(characters.length);
    expect(pesquisar).toBe([characters["name"]]);
  });
});



