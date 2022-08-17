import {rickAndMorty} from '../src/data.js';

describe('actions', () => {
  it('rickAndMorty is a object', () => {
    expect(typeof rickAndMorty).toBe('object');
  })
  it('displayCards is a function', () => {
    expect(typeof rickAndMorty.displayCards).toBe('function');
  });
  it('filtrarPorStatus is a function', () => {
    expect(typeof rickAndMorty.filtrarPorStatus).toBe('function');
  });  
});