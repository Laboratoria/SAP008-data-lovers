import { searchCharacters, filterCharacters, sortCharacters, getPercentage } from '../src/data.js';

const newArray = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
  },
  {
    "id": 2,
    "name": "Abadango Cluster Princess",
    "status": "Alive",
    "species": "Alien",
    "gender": "Female",
  },
  {
    "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "gender": "Female",
  },

]

const names = [
  { "name": "Rick Sanchez" },
  { "name": "Summer Smith" },
  { "name": "Abadango Cluster Princess" },
]

//--Teste buscar por nome--//

describe('functionSearch', () => {
  it('is a function', () => {
    expect(typeof searchCharacters).toBe('function');
  });

  it('Deverá buscar por um nome', () => {
    const expected = searchCharacters(names, 'aranha')
    expect(expected).toEqual([])
  });
  it('Deverá buscar por um nome', () => {
    const expected = searchCharacters(names, 'Rick')
    expect(expected).toEqual([{ "name": "Rick Sanchez" }])
  });
});

//--Teste buscar por status--//

describe('filterStatus', () => {
  it('Deverá ser uma função', () => {
    expect(typeof filterCharacters).toBe('function');
  });

  it('Deverá filtrar pelo status Alive', () => {
    const aliveExpected = "Alive"
    const expected = filterCharacters(newArray, 'status', aliveExpected);
    expect(expected.length).toEqual(3);
    expect(expected[0].status).toEqual(aliveExpected);
    expect(expected[1].status).toEqual(aliveExpected);
  });
});

//--Teste buscar por espécie--//

describe('filterSpecies', () => {
  it('Deverá ser uma função', () => {
    expect(typeof filterCharacters).toBe('function');
  });

  it('Deverá filtrar pela espécie Humana', () => {
    const humanExpected = "Human"
    const expected = filterCharacters(newArray, 'species', humanExpected);
    expect(expected.length).toEqual(2);
    expect(expected[0].species).toEqual(humanExpected);
    expect(expected[1].species).toEqual(humanExpected);
  });
});

//--Teste buscar por gênero--//

describe('filterGender', () => {
  it('Deverá ser uma função', () => {
    expect(typeof filterCharacters).toBe('function');
  });

  it('Deverá filtrar por Gênero', () => {
    const femaleExpected = "Female"
    const expected = filterCharacters(newArray, 'gender', femaleExpected);
    expect(expected.length).toEqual(2);
    expect(expected[1].gender).toEqual(femaleExpected);
    expect(expected[0].gender).toEqual(femaleExpected);
  });
});

//--Teste ordenação alfabética--//

describe('sortOrder', () => {
  it('Deverá ser uma função', () => {
    expect(typeof sortCharacters).toBe('function');
  });

  it('Deverá retornar em ordem crescente', () => {
    const namesExpected = [names[2], names[0], names[1]];
    expect(sortCharacters(names, "crescente")).toEqual( namesExpected );
  });
  it('Deverá retornar em ordem decrescente', () => {
    const namesDecrescente = [names[2], names[1], names[0]];
    expect(sortCharacters(names, "decrescente")).toEqual(namesDecrescente);
  });
  it('Deverá retornar em ordem decrescente linha 24', () => {
    const namesToSort = [names[0], names[1], names[2]];
    const namesDecrescente = [namesToSort[0], namesToSort[1], namesToSort[2]];
    expect(sortCharacters(namesToSort, "decrescente")).toEqual(namesDecrescente);
  });
});

//--Teste cálculo porcentagem--//

describe('calPercentage', () => {
  it('Deverá ser uma função', () => {
    expect(typeof getPercentage).toBe('function');
  });

  it('Deverá retornar  porcentagem de personagens femininos', () => {
    const percentageExpected = getPercentage(newArray, 'Female');
    expect(percentageExpected).toEqual('66.67');
});
  });
