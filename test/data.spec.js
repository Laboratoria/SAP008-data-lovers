import { filterData } from "../src/data.js";

const dataFilms = [
  {
    title: "Castle in the Sky",
    people: [
      {
        name: "Pazu",
        gender: "Male",
      },

      {
        name: "Lusheeta Toel Ul Laputa",
        gender: "Female",
      },

      {
        name: "Dola",
        gender: "Female",
      },
    ],
  },

  {
    title: "Porco Rosso",
    people: [
      {
        name: "Porco Rosso",
        gender: "Male",
      },

      {
        name: "Donald Curtis",
        gender: "Male",
      },

      {
        name: "Fio Piccolo",
        gender: "Female",
      },
    ],
  },

  {
    title: "When Marnie Was There",
    people: [
      {
        name: "Marnie",
        gender: "Female",
      },

      {
        name: "Anna Sasaki",
        gender: "Female",
      },

      {
        name: "Kazuhiko",
        gender: "Male",
      },
    ],
  },
];

describe("filterData", () => {
  it("is a function", () => {
    expect(typeof filterData).toBe("function");
  });

  it("should throw TypeError when invoked with wrong argument types", () => {
    expect(() => filterData()).toThrow(TypeError);
    expect(() => filterData(0)).toThrow(TypeError);
    expect(() => filterData(null, [])).toThrow(TypeError);
    expect(() => filterData(0, 0)).toThrow(TypeError);
    expect(() => filterData("djeiowhfioWF", 0, [])).toThrow(TypeError);
  });

  it('should return an array with "Pazu" for movie "Castle in the Sky" and gender "Male" ', () => {
    expect(filterData(dataFilms[0].people, "gender", "Male")).toStrictEqual([
      dataFilms[0].people[0],
    ]);
  });
});
