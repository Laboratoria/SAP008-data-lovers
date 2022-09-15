import { filterData, ascendingOrder, descendingOrder } from '../src/data.js';

const arrayTest = [
  {
    "name": "Giovanni Abagnale",
    "gender": "M",
    "sport": "Rowing",
    "team": "Italy",
    "medal": "Bronze"
  },
  {
    "name": "Patimat Abakarova",
    "gender": "F",
    "sport": "Taekwondo",
    "team": "Iran",
    "medal": "Bronze"
  },
  {
    "name": "Luc Abalo",
    "gender": "M",
    "sport": "Taekwondo",
    "team": "France",
    "medal": "Silver"
  },
  {
    "name": "Saeid Morad Abdevali",
    "gender": "M",
    "sport": "Taekwondo",
    "team": "Iran",
    "medal": "Gold"
  }
]

describe('filterData', () => {
  it('é uma função', () => {
    expect(typeof filterData).toBe('function');
  })

  it('filtrar o país do atleta', () => {
    const paisEsperado = filterData(arrayTest, "team", "Iran")
    expect(paisEsperado.length).toEqual(2);
    expect(paisEsperado).toEqual([
      arrayTest[1],
      arrayTest[3]
    ]);
  })
  it('filtrar a modalidade do atleta', () => {
    const modalidadeEsperada = filterData(arrayTest, "sport", "Taekwondo")
    expect(modalidadeEsperada.length).toEqual(3);
    expect(modalidadeEsperada).toEqual([
      arrayTest[1],
      arrayTest[2],
      arrayTest[3]
    ]);
  })
  it('filtrar a medalha do atleta', () => {
    const medalhaEsperada = filterData(arrayTest, "medal", "Bronze")
    expect(medalhaEsperada.length).toEqual(2);
    expect(medalhaEsperada).toEqual([
      arrayTest[0],
      arrayTest[1]
    ]);
  })
});

describe('ascendingOrder', () => {
  it('é uma função', () => {
    expect(typeof ascendingOrder).toBe('function');
  });

  it('ordenar de z-a', () => {
    const ordemEsperada = descendingOrder(arrayTest, 'Z-A');
    expect(ordemEsperada.length).toEqual(4);
    expect(ordemEsperada).toEqual([arrayTest[3], arrayTest[1], arrayTest[2], arrayTest[0]]);
  })
});