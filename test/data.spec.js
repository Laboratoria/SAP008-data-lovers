import {
  sortByAZ,
  sortByZA,
  filterData,
  filterName,
  computeStats,
} from "../src/data.js";

const rick = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  gender: "Male",
};

const summer = {
  id: 3,
  name: "Summer Smith",
  status: "Alive",
  species: "Human",
  gender: "Female",
};

const alien = {
  id: 13,
  name: "Alien Googah",
  status: "unknown",
  species: "Alien",
  gender: "unknown",
};

const characters = [rick, summer, alien];

describe("sortByAZ", () => {
  it("is a function", () => {
    expect(typeof sortByAZ).toBe("function");
  });

  it("deve ordenar um array por ordem alfabética", () => {
    const ordenado = sortByAZ(characters);

    expect(ordenado.length).toBe(characters.length);
    expect(ordenado).toEqual([alien, rick, summer]);
  });
});

describe("sortByZA", () => {
  it("is a function", () => {
    expect(typeof sortByZA).toBe("function");
  });

  it("deve ordenar um array pela ordem de Z a A", () => {
    const sortByZA = sortByAZ(characters).reverse();
    expect(sortByZA).toEqual([summer, rick, alien]);
  });
});

describe("filterData", () => {
  it("is a function", () => {
    expect(typeof filterData).toBe("function");
  });

  it("deve filtrar pelo os dados de gender", () => {
    expect(filterData(characters, "gender", "Female")).toEqual([summer]);

    expect(filterData(characters, "gender", "Male")).toEqual([rick]);

    expect(filterData(characters, "gender", "unknown")).toEqual([alien]);
  });
});

describe("filterData", () => {
  it("deve filtrar pelo os dados de status", () => {
    expect(filterData(characters, "status", "Alive")).toEqual([rick, summer]);
  });
});

describe("filterData", () => {
  it("deve filtrar pelo os dados de species", () => {
    expect(filterData(characters, "species", "Alien")).toEqual([alien]);
  });
});

describe("filterName", () => {
  it("is a function", () => {
    expect(typeof filterName).toBe("function");
  });

  it("deve pesquisar pelo nome", () => {
    const pesquisar = filterName(characters, "Summer");
    expect(pesquisar).toEqual([summer]);
  });
});

describe("computeStats", () => {
  it("is a function", () => {
    expect(typeof computeStats).toBe("function");
  });

  it('calcular a pocentagem de personagens "Alive"', () => {
    const calcular = computeStats(characters, "status", "Alive");
    const resultado = 2;
    expect(calcular).toEqual(resultado);
  });
});