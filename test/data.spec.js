import { filterData } from '../src/data.js';

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
    "sport": "Handball",
    "team": "France",
    "medal": "Silver"
  },
  {
    "name": "Saeid Morad Abdevali",
    "gender": "M",
    "sport": "Wrestling",
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
});