import { filtroDoSelect } from '../src/data.js';


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
