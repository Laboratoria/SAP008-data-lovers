import {rickAndMorty} from '../src/data.js';

const arrayTest = [
  {
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "unknown"
  },

  {
    name: "Morty Smith",
    status: "Alive",
    species: "unknown",
    gender: "Male"
  },

  {
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    gender: "Female"
  },

  {
    name: "Tiny Rick",
    status: "Dead",
    species: "Alien",
    gender: "Female"
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

  it('filtra o status dos personagens mortos', () => {
    const expectedStatus = rickAndMorty.filtrarPorStatus(arrayTest, "dead");
    expect(expectedStatus.length).toEqual(1);
    expect(expectedStatus).toEqual([arrayTest[3]]);
    expect(expectedStatus[0]).toEqual(arrayTest[3]);    
  });

  it('filtra o status dos personagens vivos', () => {
    const expectedStatus = rickAndMorty.filtrarPorStatus(arrayTest, "alive");
    expect(expectedStatus.length).toEqual(3);
  });

});

  describe('filtrarPorExpecie', () => {
    it('é uma função', () => {
      expect(typeof rickAndMorty.filtrarPorEspecie).toBe('function');
   });

   it('filtra a espécie dos personagens alienígenas', () => {
    const personagem = rickAndMorty.filtrarPorEspecie(arrayTest, "alien");
    expect(personagem.length).toEqual(1);
    expect(personagem).toEqual([arrayTest[3]]);
    
   });

   it('filtra a espécie dos personagens desconhecidos', () => {
    const personagem = rickAndMorty.filtrarPorEspecie(arrayTest, "unknown");
    expect(personagem.length).toEqual(1);
    expect(personagem).toEqual([arrayTest[1]]);

   });

  });

    describe('filtrarPorGênero', () => {
      it('é uma função', () => {
        expect(typeof rickAndMorty.filtrarPorGenero).toBe('function');
      });

      it('filtra o gênero dos personagens femininos', () => {
        const personagem = rickAndMorty.filtrarPorGenero(arrayTest, "female");
        expect(personagem.length).toEqual(2);
        expect(personagem).toEqual([arrayTest[2],arrayTest[3]]);
      });
    });


  describe('buscar por nome', () => {

    it('deve buscar por um nome', () => {
      const personagens = rickAndMorty.buscarPorNome(arrayTest, "Rick");
      expect(personagens.length).toEqual(2);
    });
  });

