import {ghibli} from '../src/data.js';

describe('actions', () => {
  it('ghibli is a object', () => {
    expect(typeof ghibli).toBe('object');
  })
  it('addTela is a function', () => {
    expect(typeof ghibli.printCatalogue).toBe('function');
  });
  it('selectDuration is a function', () => {
    expect(typeof ghibli.filterDuration).toBe('function');
  });
  it('sorted is a function', () => {
    expect(typeof ghibli.sortedFilms).toBe('function');
  });
});

const films = [
  {title: "Castle in the Sky", duration: '125', rt_score: '95', release_date: '1986', poster: ''}, 
  {title: "Kiki's Delivery Service", duration: '102', rt_score: '96', release_date: '1989', poster: ''}, 
  {title: "My Neighbor Totoro", duration: '88', rt_score: '93', release_date: '1988', poster: ''}
];

describe('filters', () => {
  it("film filter by short duration", () => {
    expect(ghibli.filterDuration(films, '90min')).toEqual(expect.not.stringContaining("Kiki's Delivery Service")); // espera-se que o filtro não devolva o filme citado
  });
  it("film filter by long duration", () => {
    expect(ghibli.filterDuration(films, '150min')).toEqual(expect.not.stringContaining("My Neighbor Totoro")); // espera-se que o filtro não devolva o filme citado
  });
})

describe('aggregate calculations', () => {
  it("count films", () => {
    expect(ghibli.countFilms(films)).toBe(3);
  })
})

// it('should return 3 films`', () => {
//   expect(addTela().length).toBe(20);
// });