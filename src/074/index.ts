import { DigitFactorialChainEvaluator } from './digit-factorial';

export function main074() {
  return countChainsOfLengthBelow(60, 1000000);
}

function countChainsOfLengthBelow(length: number, max: number) {
  const evaluator = new DigitFactorialChainEvaluator();
  let count = 0;
  for (let i = 1; i < max; i++) {
    const chainLength = evaluator.getLength(i);
    if (chainLength === length) {
      count++;
    }
  }
  return count;
}
