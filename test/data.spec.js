import {ghibli} from '../src/data.js';

describe('should be a function/object', () => {
  it('ghibli is a object', () => {
    expect(typeof ghibli).toBe('object');
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

describe('should be a filter', () => {
  it("film filter by short duration", () => {
    const shortDuration = ghibli.filterDuration(filmsTest, '90min');

    expect(shortDuration.length).toEqual(1);
    expect(shortDuration[0].duration).toEqual('88');
  });

  it("film filter by long duration", () => {
    const longDuration = ghibli.filterDuration(filmsTest, '150min');

    expect(longDuration.length).toEqual(1);
    expect(longDuration[0].duration).toEqual('125');
  });

  it("film filter by medium duration", () => {
    const mediumDuration = ghibli.filterDuration(filmsTest, '120min');

    expect(mediumDuration.length).toEqual(1);
    expect(mediumDuration[0].duration).toEqual('102');
  });

  it ("characters filter by film", () => {
    const characters = ghibli.filmPeople(filmsTest, "Kiki's Delivery Service");

    expect(characters[0].people.length).toEqual(3);
    expect(characters[0].people[0].name).toEqual("Kiki");
    expect(characters[0].people[2].name).toEqual("Ursula");
  })
})

describe('should order the films', () => {
  it("should sort films by score", () => {
    const sorted = ghibli.sortedFilms(filmsTest, 'rt_score')

    expect(sorted.length).toEqual(3);
    expect(sorted[0].rt_score).toEqual('96');
    expect(sorted[2].rt_score).toEqual('93');
  });

  it("should sort films by date", () => {
    const sortedDate = ghibli.sortedFilms(filmsTest, 'release_date')
    
    expect(sortedDate.length).toEqual(3);
    expect(sortedDate[0].release_date).toEqual('1989');
    expect(sortedDate[2].release_date).toEqual('1986');
  })
})

describe('should return aggregate calculations', () => {

  it("count films", () => {
    const filmsTotal = ghibli.countFilms(filmsTest);

    expect(filmsTotal).toBe(3);
  });

  it("count people", () => {
    const peopleTotal = ghibli.countPeople(filmsTest);

    expect(peopleTotal).toBe(9);
  });

  it("count locations", () => {
    const locationsTotal = ghibli.countLocations(filmsTest)

    expect(locationsTotal).toBe(9);
  });
  
  it("count vehicles", () => {
    expect(ghibli.countVehicles(filmsTest)).toBe(1);
  })
})
