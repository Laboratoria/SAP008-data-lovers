
  it("is a function", () => {
    expect(typeof sortByZA).toBe("function");
  });

  it("deve ordenar um array pela ordem de Z a A", () => {
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
