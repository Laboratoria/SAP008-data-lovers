import { filterGenero, filterStatus, filterEspecie, filterNome, sortByName, computeStats } from '../src/data.js';
const personagens = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
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

// filtro genero
describe("filtroGenero", () => {
  it("Deverá ser uma função", () => {
    expect(typeof filterGenero).toBe("function");
  });

  it("Devera filtrar o genero selecionado", () => {
    const retornoPersonagens = [personagens[2]]
    expect(filterGenero(personagens, "Female")).toEqual(retornoPersonagens)
  })
});
// filtro status
describe("filtro Status", () => {
  it("Deverá ser uma função", () => {
    expect(typeof filterStatus).toBe("function");
  });

  it("Devera filtrar o status selecionado", () => {
    const retornoPersonagens = [personagens[0], personagens[1], personagens[2]]
    expect(filterStatus(personagens, "Alive")).toEqual(retornoPersonagens)
  })
});
// filtro especie
describe("filtro Especie", () => {
  it("Deverá ser uma função", () => {
    expect(typeof filterEspecie).toBe("function");
  });

  it("Devera filtrar a especie selecionado", () => {
    const retornoPersonagens = [personagens[0], personagens[1], personagens[2]]
    expect(filterEspecie(personagens, "Human")).toEqual(retornoPersonagens)
  })
});
//filtro nome
describe("filtro nome", () => {
  it("Deverá ser uma função", () => {
    expect(typeof filterEspecie).toBe("function");

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