import { CollatzChainEvaluator } from './collatz';

export function main014() {
  return maxCollatzChainLengthUnder(1000000);
}

function maxCollatzChainLengthUnder(upperLimit: number) {
  const evaluator = new CollatzChainEvaluator();
  let maxNumber = 0;
  let maxTerms = 0;

  for (let num = 0; num < upperLimit; num++) {
    const terms = evaluator.getLength(num);
    if (terms > maxTerms) {
      maxNumber = num;
      maxTerms = terms;
    }
  }

  return maxNumber;
}
