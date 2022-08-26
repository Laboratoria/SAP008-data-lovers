import { filtrar, ordenar,calculoAgregado1} from "../src/data.js";

const arrayAmostra = [
  {
    name: "Rick Sanchez",
    species: "Human",
    gender: "Male",
    status: "Alive",
  },

  {
    name: "Alien Googah",
    species: "Alien",
    gender: "unknown",
    status: "unknown",
  },

  {
    name: "Adjudicator Rick",
    species: "Human",
    gender: "Male",
    status: "Dead",
  },

  {
    name: "Beth Smith",
    species: "Human",
    gender: "Female",
    status: "Alive",
  },
];

describe("filtrar", () => {
  it("é uma função", () => {
    expect(typeof filtrar).toBe("function");
  });

  it("filtra a espécie dos personagens humanos", () => {
    const especieEsperada = filtrar(arrayAmostra,"species","Human");
    expect(especieEsperada.length).toEqual(3);
    expect(especieEsperada).toEqual([
      arrayAmostra[0],
      arrayAmostra[2],
      arrayAmostra[3]
    ]);
  });

  it("filtra o gênero feminino dos personagens", () => {
    const especieEsperada = filtrar(arrayAmostra,"gender","Female");
    expect(especieEsperada.length).toEqual(1);
    expect(especieEsperada).toEqual([arrayAmostra[3]]);
  });

  it("filtra o status morto dos personagens", () => {
    const especieEsperada = filtrar(arrayAmostra,"status","Dead");
    expect(especieEsperada.length).toEqual(1);
    expect(especieEsperada).toEqual([arrayAmostra[2]]);
  });
});



describe('ordenar', () => {
  it('é uma função', () => {
    expect(typeof ordenar).toBe('function');
  });

  it("ordena personagens de A-Z", () => {
    const ordemEsperada = ordenar(arrayAmostra, "A-Z");
    expect(ordemEsperada.length).toEqual(4);
    expect(ordemEsperada).toEqual([arrayAmostra[2], arrayAmostra[1], arrayAmostra[3], arrayAmostra[0]]);
  });

  it("ordena personagens de Z-A", () => {
    const ordemEsperada = ordenar(arrayAmostra, "Z-A");
    expect(ordemEsperada.length).toEqual(4);
    expect(ordemEsperada).toEqual([arrayAmostra[0], arrayAmostra[3], arrayAmostra[1], arrayAmostra[2]]);
  });
});

describe('calculoAgregado1', () => {
  it('é uma função', () => {
    expect(typeof ordenar).toBe('function');
  });

  it("calcula a porcentagem de especie humana", () => {
    const calculoEsperado = calculoAgregado1(arrayAmostra.length, 3);
    expect(calculoEsperado).toEqual(75);
  });

  it("calcula a porcentagem de especie alien ", () => {
    const calculoEsperado = calculoAgregado1(arrayAmostra.length, 1);
    expect(calculoEsperado).toEqual(25);
  });
});