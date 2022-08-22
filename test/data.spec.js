import { filterByRegion } from "../src/data.js";

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

  it("returns a new array, filtered by region Kanto", () => {
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

  it("returns a new array, filtered by region johto", ()=> {
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

//it("returns a new array, filtered by region Johto", () => {
 // expect(filterByRegion(pokemons, "johto")).toBe("example");
//});

