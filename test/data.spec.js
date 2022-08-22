import { dataFilter, nameFilter, computeStats, orderAz} from '../src/data.js';

  const personagens = [
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
   describe("specieFilter", () => {
    it("deverá ser uma função", () => {
      expect(typeof dataFilter).toBe("function");
    })
    it ("filtrar pela espécie Human", () => {
      const expected = dataFilter(personagens, " Human");
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