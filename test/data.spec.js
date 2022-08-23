import { mainFilters } from '../src/data.js';


describe('mainFilters', () => {
  it('should be an object', () => {
    expect(typeof mainFilters).toBe('object');
  });

 });

describe('mainFilters.displayCharactersList', () => {

  it('should be a function', () => {
    expect(typeof mainFilters.displayCharactersList).toBe('function');
  });

  it('should return 707 characters', () => {
    expect(mainFilters.displayCharactersList().length).toBe(707)
  })

  it('should return Bellatrix Lestrange', () => {
    expect(mainFilters.displayCharactersList().includes('Bellatrix Lestrange')).toBe(true)
  })

});

describe('mainFilters.displayBooksList', () => {

  it('should be a function', () => {
    expect(typeof mainFilters.displayCharactersList).toBe('function');
  });

  it('should return 8 books', () => {
    expect(mainFilters.displayBooksList().length).toBe(8)
  })

  it('should return Harry Potter and the Prisoner of Azkaban', () => {
    expect(mainFilters.displayBooksList().includes('Harry Potter and the Prisoner of Azkaban')).toBe(true)
  })

});

describe('mainFilters.displaySpellsList', () => {

  it('should be a function', () => {
    expect(typeof mainFilters.displaySpellsList).toBe('function');
  });

  it('should return 305 spells', () => {
    expect(mainFilters.displaySpellsList().length).toBe(305)
  })

  it('should return Wingardium Leviosa', () => {
    expect(mainFilters.displaySpellsList().includes('Wingardium Leviosa')).toBe(true)
  })

});