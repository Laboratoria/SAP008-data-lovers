import { filterByRegion } from "../src/data.js";
import { filterByType } from "../src/data.js";

//teste filtro por região//
const mockPokemons = [
  {
    generation: {
      num: "generation i",
      name: "kanto",
    }
  },
  {
    generation: {
      num: "generation ii",
      name: "johto",
    }
  },
];

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
        }
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
        }
      },
    ];
    expect(result).toEqual(expected);
  })
});

//teste filtro por Type//

const mockType = [
  {
    type: [
      "grass",
      "poison",
    ]
  },
  {
    type: [
      "normal",
    ]
  },
  {
    type: [
      "fire"
    ]
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
        type: [
          "grass",
          "poison",
        ]
      },
    ];

    expect(result).toEqual(expected);
  });

  it("returns a new array, filtered by type fire", () => {
    const result = filterByType(mockType, "fire");
    const expected = [
      {
        type: [
          "fire",
        ]
      },
    ];

    expect(result).toEqual(expected);
  });

  it("returns a new array, filtered by type normal", () => {
    const result = filterByType(mockType, "normal");
    const expected = [
      {
        type: [
          "normal"
        ]
      },
    ];

    expect(result).toEqual(expected);
  });
});

//teste para Ordenação//




