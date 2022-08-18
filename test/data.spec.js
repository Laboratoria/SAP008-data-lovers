import { sortAz, sortZa, filterSearch, speciesFilter, genderFilter, 
  statusFilter, calculationInte } from '../src/data.js';

  const charactersData = [
    {
      "name": "Rick Sanchez",
      "Species": "Human",
      "Gender": "Male",
      "Status": "Alive",
    },
    {
      "name": "Morty Smith",
      "Species": "Human",
      "Gender": "Male",
      "Status": "Alive",
    },
    {
      "name": "Summer Smith",
      "Species": "Human",
      "Gender": "Female",
      "Status": "Alive",
    },
    {
      "name": "Summer",
      "Species": "Human",
      "Gender": "Female",
      "Status": "Alive",
    },
    {
      "name": "Beth Smith",
      "Species": "Human",
      "Gender": "Female",
      "Status": "Alive",
    },
   ];
   const name = [
     {"name": "Rick Sanchez"},
     {"name": "Morty Smith"},
     {"name": "Summer Smith"},
     {"name": "Beth Smith"},
   ]

   // Teste para filtrar espécie 
   describe("speciesFilter", () => {
    it("deverá ser uma função", () => {
      expect(typeof speciesFilter).toBe("function");
    })
    it ("filtrar pela espécie Human", () => {
      const expected = speciesFilter(charactersData, " Human");
      expect(expected).toEqual([
        {
          name: "Summer Smith",
          species: "Human",
          gender: "Female",
          status:"Alive",
        },
      ]);
    });
  });
  // Teste para filtrar gênero
describe("genderFilter", () =>{
  it("deverá ser uma função", () =>{
    expect (typeof genderFilter).toBe("function");
  });
  it("filtrar pelo gênero Male", () =>{
    const expected = genderFilter(charactersData, "Male");
    expect (expected).toEqual([
      {
        name: "Rick Sanchez",
        species: "Human",
        gender: "Male",
        status: "Alive",
      },
    ]);
  });
});

// Teste para filtrar Status
describe("statusFilter", () => {
  it ("deverá ser uma função", () => {
    expect (typeof statusFilter).toBe("function");
  });
  it("filtrar pelo status Alive", () => {
    const expected = statusFilter(charactersData, "Alive");
    expect(expected).toEqual([
      {
        name: "Morty Smith",
        species:"Human",
        gender:"Male",
        status:"Alive",
      },
    ]);
  });
});
// Teste para buscar por nome (pesquisar)
describe("Deverá buscar por nome", () => {
  it ("Deverá ser uma função", () => {
    expect(typeof filterSearch).toBe("function");
  });
  it("Deverá buscar por nome",() => {
    const expected = filterSearch(name, "Ana")
    expect(expected).toEqual([]) 
  });
  it("Deverá buscar por nome", () => {
    const expected = filterSearch(name, "summer")
    expect(expected).toEqual([{Name: "Summer Smith"}])
  });
});
// Teste para calcular porcentagem
describe("calculationInte", () => {
   it("Deverá ser uma função", () =>{
     expect(typeof calculationInte).toBe("function");
   });
   it ("Deverá retornar 70% dos personagens humanos", () => {
     const expected = calculationIntenpm(charactersData.length, 1)
     expect(expected).toEqual(70)
   });
});
// Teste para ordenar de (A-Z) e de (Z-A)
describe("sortAz", () => {
  it("Deverá ser uma função", () =>  {
    expect (typeof sortAz).toBe ("function")
  });
  it ("Deverá sortear A-Z ",() => {
    expect(sortAz(name, "A-Z")).toEqual([name[0],name[3], name[2], name[1]])
describe("sortZa", () => {
  it("Deverá ser uma função", () =>{
    expect (typeof sortZa).toBe("function")
  });
  it ("Deverá sortear sortZa",() => {
    expect(sortZa(name, "Z-A")).toEqual([name[1]], name[2], name[3], name[0])
  });
});
  });
});
