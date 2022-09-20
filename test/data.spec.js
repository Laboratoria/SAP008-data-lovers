import { searchCharacters, filterCharacters, sortCharacters } from '../src/data.js';

const dados = [
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

const nomes = [
  { "name": "Rick Sanchez" },
  { "name": "Abadango Cluster Princess" },
  { "name": "Summer Smith" },

]

//TESTE BUSCAR POR NOME//          

describe('funcaoSearch', () => {
  it('is a function', () => {
    expect(typeof searchCharacters).toBe('function');
  });

  it('Deverá buscar por um nome', () => {
    const expected = searchCharacters(nomes, 'aranha')
    expect(expected).toEqual([])
  });
  it('Deverá buscar por um nome', () => {
    const expected = searchCharacters(nomes, 'Rick')
    expect(expected).toEqual([{ "name": "Rick Sanchez" }])
  });
});

//TESTE BUSCAR STATUS//

describe('buscarStatus', () => {
  it('Deverá ser uma função', () => {
    expect(typeof filterCharacters).toBe('function');
  });

  it('Deverá filtrar pelo status Alive', () => {
    const aliveExpected = "Alive"
    const expected = filterCharacters(dados, 'status', aliveExpected);
    expect(expected.length).toEqual(3);
    expect(expected[0].status).toEqual(aliveExpected);
    expect(expected[1].status).toEqual(aliveExpected);
  });
});

//TESTE BUSCAR ESPÉCIE//

describe('buscarEspecie', () => {
  it('Deverá ser uma função', () => {
    expect(typeof filterCharacters).toBe('function');
  });

  it('Deverá filtrar pela espécie Humana', () => {
    const humanExpected = "Human"
    const expected = filterCharacters(dados, 'species', humanExpected);
    expect(expected.length).toEqual(2);
    expect(expected[0].species).toEqual(humanExpected);
    expect(expected[1].species).toEqual(humanExpected);
  });
});

//TESTE BUCAR POR GÊNERO//

describe('buscarGênero', () => {
  it('Deverá ser uma função', () => {
    expect(typeof filterCharacters).toBe('function');
  });

  it('Deverá filtrar por Gênero', () => {
    const femaleExpected = "Female"
    const expected = filterCharacters(dados, 'gender', femaleExpected);
    expect(expected.length).toEqual(2);
    expect(expected[1].gender).toEqual(femaleExpected);
    expect(expected[0].gender).toEqual(femaleExpected);
  });
});

//TESTE PARA ORDENAÇÃO ALFABÉTICA//

describe('sortOrdem', () => {
  it('Deverá ser uma função', () => {
    expect(typeof sortCharacters).toBe('function');
  });

  it('Deverá retornar em ordem crescente', () => {
    const namesExpected = [nomes[1], nomes[0], nomes[2]];
    expect(sortCharacters(nomes, "crescente")).toEqual( namesExpected );
  });
  it('Deverá retornar em ordem decrescente', () => {
    const namesDecrescente = [nomes[2], nomes[1], nomes[0]];
    expect(sortCharacters(nomes, "decrescente")).toEqual(namesDecrescente);
  });
});


 