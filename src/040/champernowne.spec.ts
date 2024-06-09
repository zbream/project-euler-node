import { ChampernowneGenerator, ChampernowneTermUtil } from './champernowne';

describe('040-champernowne', () => {
  it('should generate each term', () => {
    const generator = ChampernowneGenerator();
    for (let i = 1; i <= 9; i++) {
      expect(generator.next().value).toBe(i);
    }
    expect(generator.next().value).toBe(1);
    expect(generator.next().value).toBe(0);
    expect(generator.next().value).toBe(1);
    expect(generator.next().value).toBe(1);
    expect(generator.next().value).toBe(1);
    expect(generator.next().value).toBe(2);
  });

  it('should generate a requested term', () => {
    const champernowne = new ChampernowneTermUtil();
    expect(champernowne.getTerm(4)).toBe(4);
    expect(champernowne.getTerm(9)).toBe(9);
    expect(champernowne.getTerm(12)).toBe(1);
    expect(champernowne.getTerm(15)).toBe(2);
  });

  it('should throw when requested term is out of bounds', () => {
    const champernowne = new ChampernowneTermUtil();
    expect(champernowne.getTerm(4)).toBe(4);
    expect(() => champernowne.getTerm(3)).toThrow();
  });
});
