import { filterData1, filterData2, filterData3 } from '../src/data.js';


describe('filterData1, 2 e 3 deve ser uma funçao de filtro', () => {
  it('funçao para filtrar espécie', () => {
    expect(typeof filterData1).toBe('function');
  });

  it('funcao para filtrar gênero', () => {
    expect(typeof filterData2).toBe('function');
  });

  it('funcao para filtrar status', () => {
    expect(typeof filterData3).toBe('function');
  });

});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
