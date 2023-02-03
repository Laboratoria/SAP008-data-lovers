import { filterNome, sortByName, computeStats, filterData } from '../src/data.js';
const personagens = [
  {
    "id": 1,
    "name": "Abadango Cluster Princess",
    "status": "Alive",
    "species": "Alien",
    "type": "",
    "gender": "Female",
  },
  {
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",

  },
  {
    "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
  }
]

describe("filtro dos selects, especie, genero, status", () => {
  it("Deverá ser uma função", () => {
    expect(typeof filterData).toBe("function");

  });

  it("Devera filtrar a especie selecionada", () => {
    const devolvePersonagens = [personagens[0]]
    expect(filterData(personagens, "species", "Alien")).toEqual(devolvePersonagens)
  })
});




//filtro nome
describe("filtro nome", () => {
  it("Deverá ser uma função", () => {
    expect(typeof filterNome).toBe("function");

  });

  it("Devera filtrar o nome digitado", () => {
    const retornoPersonagens = [personagens[1]]
    expect(filterNome(personagens, "Morty Smith")).toEqual(retornoPersonagens)
  })
});

// ordernar de a-z
const nome = [
  {
    "name": "Rick Sanchez",
  },
  {
    "name": "Morty Smith",
  },
  {
    "name": "Summer Smith",
  },
]
describe("ordernar de A-z", () => {
  it("Deverá ser uma função", () => {
    expect(typeof sortByName).toBe("function");

  });

  it("Devera ordenar de A-z como selecionado pelo select", () => {
    expect(sortByName(nome, "ordenarAZ")).toStrictEqual(nome)
  })
  it("Devera retornar  de Z-a", () => {
    expect(sortByName(nome, "ordenarZA")).toStrictEqual(nome)
  })
});

// calculo
describe("calcular quantidade total", () => {
  it("Deverá ser uma função", () => {
    expect(typeof computeStats).toBe("function");
  });

  it("Devera retornar a quantidade total do select escolhido", () => {
    const retornoPersonagens = [personagens[2]]
    expect(computeStats(retornoPersonagens)).toEqual(1)
  })
});