import { getCollatzChainLength } from './collatz';

const result = maxCollatzChainLengthUnder(1000000)
console.log(result);

function maxCollatzChainLengthUnder(upperLimit: number) {
  let maxNumber = 0;
  let maxTerms = 0;

  for (let number = 0; number < upperLimit; number++) {
    const terms = getCollatzChainLength(number);
    if (terms > maxTerms) {
      maxNumber = number;
      maxTerms = terms;
    }
  }

  return maxNumber;
}
