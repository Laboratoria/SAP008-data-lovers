import { dataFilter, nameFilter, computeStats, orderAz } from '../src/data.js';
// import { menuShow } from '../src/menu.js';

const personagens = [ 
  {
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "gender": "Male",
},
{
  "id": 2,
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male"
},
{ "id": 3,
  "name": "Summer Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Female",
},

]

let [Rick, Morty, Summer] = personagens;




// Teste do ordem alfabética

describe("orderAz", () => {
  it("It should be a function", () => {
    expect(typeof orderAz).toBe("function");
  });

  it("returns object in Az", () => {
    expect(orderAz(personagens)).toEqual([Morty, Rick, Summer]); 
  });
  it("returns words in reverse Za", () => {
    expect(orderAz([Morty, Rick, Summer])).toEqual([Summer, Rick, Morty]);
  });
});

describe('Filter objects as chosen by the conditions of buttons', () => {
  it('should be a function', () => {
    expect(typeof dataFilter).toBe('function');
  })
});

it('returns objects in type of data that it was chosen', () => {
  expect(dataFilter(personagens,"gender", "Female")).toEqual([Summer]);
});

describe('Filter characters by name', () => {
  it('should be a function', () => {
    expect(typeof nameFilter).toBe('function')
  });

  it('returns character by searched name', () => {
    expect(nameFilter(personagens, "rick")).toEqual([Rick]);
  })
});

describe('Show in numbers datas of chosen category', () => {
  it('should be a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('returns datas in numbers', () => {
    expect(computeStats(personagens, "status", "Alive")).toEqual(3);
  })
});