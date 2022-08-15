import {addTela, selectedDuration} from '../src/data.js';

describe('actions', () => {
  it('is a function', () => {
    expect(typeof addTela).toBe('function');
  });

  it('is a function', () => {
    expect(typeof selectedDuration).toBe('function');
  });
});

describe('filter', () => {
  it("film filter by duration", () => {
    const films = [
      {title: "Castle in the Sky", duration: '125'}, 
      {title: "Kiki's Delivery Service", duration: '102'}, 
      {title: "My Neighbor Totoro", duration: '88'}
  ];
    expect(selectedDuration(films, '90min')).toEqual(expect.not.stringContaining("Kiki's Delivery Service")); // espera-se que o filtro não devolva o filme citado
  });

  it ()
})

// it('should return 3 films`', () => {
//   expect(addTela().length).toBe(20);
// });