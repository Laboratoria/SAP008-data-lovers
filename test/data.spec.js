import { filterByCriteriaValue } from '../src/data.js';



const castle = {
  "title": "Castle in the Sky",
  "director": "Hayao Miyazaki",
  "producer": "Isao Takahata",
  "release_date": "1986",
  "rt_score": "95",
};

const fireflies = {
  "title": "Grave of the Fireflies",
  "director": "Isao Takahata",
  "producer": "Toru Harai",
  "release_date": "1988",
  "rt_score": "97",
};

const objCriteriaValue = [castle, fireflies]

describe('filterByCriteriaValue', () => {
  it('é função', () => {

    expect(typeof filterByCriteriaValue).toBe('function');
  });

  it('resultado de filterDirector', () => {
    expect(filterByCriteriaValue(objCriteriaValue, "director", "Hayao Miyazaki")).toEqual([castle]);
  });
});






/*it('returns `example`', () => {
  expect(example()).toBe('example');
});
});


describe('anotherExample', () => {
it('is a function', () => {
  expect(typeof anotherExample).toBe('function');
});

it('returns `anotherExample`', () => {
  expect(anotherExample()).toBe('OMG');
});
}); */


/*let retornoEsperado = [objDirector[0]];*/