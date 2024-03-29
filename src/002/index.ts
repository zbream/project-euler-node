import { FibonacciGenerator } from '../common/fibonacci';

export function main002() {
  return sumOfEvenFibonacciValuesBelow(4000000);
}

function sumOfEvenFibonacciValuesBelow(upperLimit: number): number {
  let sum = 0;

  const fibonacci = FibonacciGenerator(1, 2);
  for (const term of fibonacci) {
    if (term > upperLimit) {
      break;
    }
    if (term % 2 === 0) {
      sum += term;
    }
  }

  return sum;
}
