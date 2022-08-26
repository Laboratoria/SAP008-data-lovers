import { filterByRegion } from "../src/data.js";
import { filterByType } from "../src/data.js";
import { sortBy } from "../data.js";

const mockPokemons = [
  {
    generation: {
      num: "generation i",
      name: "kanto",
    },
  },
  {
    generation: {
      num: "generation ii",
      name: "johto",
    },
  },
];
//
describe("filterByRegion", () => {
  it("is a function", () => {
    expect(typeof filterByRegion).toBe("function");
  });

  it("returns a new array, filtered by region kanto", () => {
    const result = filterByRegion(mockPokemons, "kanto");
    const expected = [
      {
        generation: {
          num: "generation i",
          name: "kanto",
        },
      },
    ];

    expect(result).toEqual(expected);
  });

  it("returns a new array, filtered by region johto", () => {
    const result = filterByRegion(mockPokemons, "johto");
    const expected = [
      {
        generation: {
          num: "generation ii",
          name: "johto",
        },
      },
    ];
    expect(result).toEqual(expected);
  });
});

//Filtro por Type//

const mockType = [
  {
    type: ["grass", "poison"],
  },
  {
    type: ["normal"],
  },
  {
    type: ["fire"],
  },
];

describe("filterByType", () => {
  it("is a function", () => {
    expect(typeof filterByType).toBe("function");
  });

  it("returns a new array, filtered by type grass", () => {
    const result = filterByType(mockType, "grass");
    const expected = [
      {
        type: ["grass", "poison"],
      },
    ];

    expect(result).toEqual(expected);
  });

  it("returns a new array, filtered by type fire", () => {
    const result = filterByType(mockType, "fire");
    const expected = [
      {
        type: ["fire"],
      },
    ];

    expect(result).toEqual(expected);
  });

  it("returns a new array, filtered by type normal", () => {
    const result = filterByType(mockType, "normal");
    const expected = [
      {
        type: ["normal"],
      },
    ];

    expect(result).toEqual(expected);
  });
});

// Teste para SortBy

const mockCP = [
  {
    stats: {
      "max-cp": "1115",
      "max-hp": "113",
    },
  },
  {
    stats: {
      "max-cp": "2720",
      "max-hp": "162",
    },
  },
  {
    stats: {
      "max-cp": "3265",
      "max-hp": "189",
    },
  },
];

describe("sortBy", () => {
  it("is a function", () => {
    expect(typeof sortBy).toBe("function");
  });

  it("returns the previous array, sorted by biggest max-cp", () => {
    const result = sortBy(mockCP, "max-cp");
    const expected = []

  // colocar o array arrumado

    expect(result).toEqual(expected);
  });

  it("returns the previous array, sorted by smallest max-cp", () => {
    const result = sortBy(mockCP, "smallest max-cp");
    const expected = []
    const obj= {
      a:1,
      a:3,
      a:[]
    }
      

    expect(result).toEqual(expected);
  });
});
