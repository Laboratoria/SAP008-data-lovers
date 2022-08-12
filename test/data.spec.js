import { mainFilters } from '../src/data.js';


describe('mainFilters', () => {
  it('should be an object', () => {
    expect(typeof mainFilters).toBe('object');
  });

 });

describe('mainFilters.displayChars', () => {

  it('should be a function', () => {
    expect(typeof mainFilters.displayChars).toBe('function');
  });

  it('should return 707 characters', () => {
    expect(mainFilters.displayChars().length).toBe(707)
  })

  it('should return Bellatrix Lestrange', () => {
    expect(mainFilters.displayChars().includes('Bellatrix Lestrange')).toBe(true)
  })

});

describe('mainFilters.displayBooks', () => {

  it('should be a function', () => {
    expect(typeof mainFilters.displayChars).toBe('function');
  });

  it('should return 8 books', () => {
    expect(mainFilters.displayBooks().length).toBe(8)
  })

  it('should return Harry Potter and the Prisoner of Azkaban', () => {
    expect(mainFilters.displayBooks().includes('Harry Potter and the Prisoner of Azkaban')).toBe(true)
  })

});

describe('mainFilters.displaySpells', () => {

  it('should be a function', () => {
    expect(typeof mainFilters.displaySpells).toBe('function');
  });

  it('should return 305 spells', () => {
    expect(mainFilters.displaySpells().length).toBe(305)
  })

  it('should return Wingardium Leviosa', () => {
    expect(mainFilters.displaySpells().includes('Wingardium Leviosa')).toBe(true)
  })

});