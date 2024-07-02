import { SquareDigitSumChainEvaluator } from './square-digit-sum';

export function main092() {
  return numChainsWhereFinalIs89UpTo(10000000);
}

function numChainsWhereFinalIs89UpTo(upperLimit: number): number {
  const evaluator = new SquareDigitSumChainEvaluator();
  let count = 0;
  for (let i = upperLimit - 1; i >= 1; i--) {
    if (evaluator.getFinal(i) === '89') {
      count++;
    }
  }
  return count;
}
