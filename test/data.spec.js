import {addTela, selectedDuration} from '../src/data.js';

describe('actions', () => {
  it('is a function', () => {
    expect(typeof addTela).toBe('function');
  });

  it('is a function', () => {
    expect(typeof selectedDuration).toBe('function');
  });

  // it('should return 20 films`', () => {
  //   expect(addTela().length).toBe(20);
  // });

  // const expected = ['My Neighbor Totoro'];
  it('should containing Totoro', () => {
    expect(selectedDuration([{title: "Castle in the Sky", duration: '125'}, 
                                      {title: "Kiki's Delivery Service", duration: '102'}, 
                                      {title: "My Neighbor Totoro", duration: '88'}], '90min')).toBe('My Neighbor Totoro');
  });
});