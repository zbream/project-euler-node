import { ChampernowneTermUtil } from './champernowne';

const champernowne = new ChampernowneTermUtil();

let product = 1;

for (let i = 1; i <= 100000; i *= 10) {
  const term = champernowne.getTerm(i);
  product *= term;
}

console.log(product);
