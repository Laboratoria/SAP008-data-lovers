import {rickAndMorty} from '../src/data.js';

/*VE ESSA MERDA AI*/

const arrayTest = [
  {
  "status": "Alive",
  "species": "Human",
  "gender": "Male",
  },

  {
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
  },

  {
    "status": "Alive",
    "species": "Human",
    "gender": "Female",
  },

  {
    "status": "Alive",
    "species": "Human",
    "gender": "Female",
  } 
];



describe('rickAndMorty', () => {

  it('rickAndMorty is a object', () => {
    expect(typeof rickAndMorty).toBe('object');
  });
});
  
  
/*describe('rickAndMorty.displayCards', () => {
  it('should be a function', () => {
    expect(typeof rickAndMorty.displayCards).toBe('function');
  });

  it('should return 493 characters', () => {
    expect(rickAndMorty.displayCards().length).toBe(493)
  })

});*/

describe('filtrarPorStatus', () => {
  it('é uma função', () => {
    expect(typeof rickAndMorty.filtrarPorStatus).toBe('function');

  });

  it('filtra o status dos personagens', () => {
    const expectedStatus = rickAndMorty.filtrarPorStatus(arrayTest, "Alive");
    expect(expectedStatus).toEqual([{
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
    }]);
  });
});
    
/*describe('filtrarPorStatus', () => {

    it('should be a function', () => {
      expect(typeof rickAndMorty.filtrarPorStatus).toBe('function');
    });
    
    it('should return "tal" for "tal" ', () => {
      expect(rickAndMorty.filtrarPorStatus()).toBe();
    });
    
  });*/

