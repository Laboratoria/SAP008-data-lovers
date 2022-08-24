import { filtroDoSelect, ordenandoCampeoes} from '../src/data.js';


describe('filtroDoSelect', () => {
  it('Deveria ser uma constante', () => {
    expect(typeof filtroDoSelect).toBe('function');
  });


  it('Deveria retornar os campeões que contém a tag Suporte', () => {
    const dados = [
      {
        name: "Nami",
        tags: [
          "Support",
          "Mage"
        ]
      },
      {
        name: "Blitzcrank",
        tags: [
          "Tank",
          "Fighter"
        ]
      },
      {
        name: "Taric",
        tags: [
          "Support",
          "Fighter"
        ]
      }
    ];
    
    const resultado = [
      {
        tags: [
          "Support",
          "Mage"
        ],
        name: "Nami"
      },
      {
        name: "Taric",
        tags: [
          "Support",
          "Fighter"
        ]
      }
    ];
    expect(filtroDoSelect(dados, "Support")).toStrictEqual(resultado);
  });
});

describe('ordenandoCampeoes', () => {
  it('Deveria ser uma função', () => {
    expect(typeof ordenandoCampeoes).toBe('function');
  });


  it('Deveria retornar os campeões em ordem decrescente', () => {
    const dados = [
      {
        name: "Nami",
        
      },
      {
        name: "Blitzcrank",
       
      },
      {
        name: "Taric",
        
      }
    ];
    
    const resultado = [
      {
        
        name: "Taric"
      },
      {
        name: "Nami",
        
      },
      {
        name: "Blitzcrank"
      }
    ];
    expect(ordenandoCampeoes(dados)).toStrictEqual(resultado)
  });
})