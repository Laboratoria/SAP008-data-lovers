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

const filmsTest = [
  {
    title: "Castle in the Sky", duration: '125', rt_score: '95', release_date: '1986', people: [
      { name: 'Lusheeta Toel Ul Laputa' }, { name: 'Pazu' }, { name: 'Dola' }
    ], locations: [
      { name: 'Gondoa' }, { name: "Pazu's Mines" }, { name: 'Laputa' }
    ], vehicles: [{ name: "Air Destroyer Goliath" }]
  },
  {
    title: "Kiki's Delivery Service", duration: '102', rt_score: '96', release_date: '1989', people: [
      { name: 'Kiki' }, { name: 'Jiji' }, { name: 'Ursula' }
    ], locations: [
      { name: "Ursula's Log Cabin" }, { name: 'Koriko' }, { name: 'Karikiya' }
    ], vehicles: []
  },
  {
    title: "My Neighbor Totoro", duration: '88', rt_score: '93', release_date: '1988', people: [
      { name: 'Satsuki Kusakabe' }, { name: 'Mei Kusakabe' }, { name: 'Tatsuo Kusakabe' }
    ], locations: [
      { name: "Kusakabe's House" }, { name: "Matsugo" }, { name: "Satsuki's School House" }
    ], vehicles: []
  }
];

describe('filters', () => {
  it("film filter by short duration", () => {
    expect(ghibli.filterDuration(filmsTest, '90min')).toEqual(expect.not.stringContaining("Kiki's Delivery Service"));
  });
  it("film filter by long duration", () => {
    expect(ghibli.filterDuration(filmsTest, '150min')).toEqual(expect.not.stringContaining("My Neighbor Totoro"));
  });
  it("order by", () => {
    expect(ghibli.sortedFilms(filmsTest, 'release_date')).not.toEqual(ghibli.sortedFilms(filmsTest, 'order'));
  });
})

describe('aggregate calculations', () => {
  it("count films", () => {
    expect(ghibli.countFilms(filmsTest)).toBe(3);
  });
  it("count people", () => {
    expect(ghibli.countPeople(filmsTest)).toBe(9);
  });
  it("count locations", () => {
    expect(ghibli.countLocations(filmsTest)).toBe(9);
  });
  it("count vehicles", () => {
    expect(ghibli.countVehicles(filmsTest)).toBe(1);
  })
})
