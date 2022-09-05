import { filterHouse} from '../src/data.js';


describe('Teste FilterHouse', () => {
  it('is a function', () => {
    expect(typeof filterHouse).toBe('function');
  });

  const HarryPotterData = [
    {
      Nome: "Hermione",
      House: "Gryffindor"
  },
  {
    Nome: "Draco",
    House: "Slytherin"
  },
  {
    Nome: "Luna",
    House: "Hufflepuff"
  }]

  it('should returns "[{ Name: "Hermione", House: "Gryffindor"}]" ', () => {
    expect(filterHouse(HarryPotterData)).toBe([{
      Nome: "Hermione",
      House: "Gryffindor"
    }]);
  });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
