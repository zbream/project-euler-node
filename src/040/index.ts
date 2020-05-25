import { ChampernowneTermUtil } from './champernowne';

export function main040() {
  const champernowne = new ChampernowneTermUtil();
  let product = 1;
  for (let i = 1; i <= 100000; i *= 10) {
    const term = champernowne.getTerm(i);
    product *= term;
  }
  return product;
}

export function example040() {
  const champernowne = new ChampernowneTermUtil();
  return champernowne.getTerm(12);
}
