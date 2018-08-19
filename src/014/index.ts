import { getCollatzChainLength } from './collatz';

const result = maxCollatzChainLengthUnder(1000000);
console.log(result);

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
