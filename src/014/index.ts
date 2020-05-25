import { getCollatzChainLength } from './collatz';

export function main014() {
  return maxCollatzChainLengthUnder(1000000);
}

function maxCollatzChainLengthUnder(upperLimit: number) {
  let maxNumber = 0;
  let maxTerms = 0;

  for (let num = 0; num < upperLimit; num++) {
    const terms = getCollatzChainLength(num);
    if (terms > maxTerms) {
      maxNumber = num;
      maxTerms = terms;
    }
  }

  return maxNumber;
}
