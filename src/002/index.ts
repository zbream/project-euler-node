import { FibonacciGenerator } from '../common/fibonacci';

const result = sumOfEvenFibonacciValuesBelow(4000000);
console.log(result);

function sumOfEvenFibonacciValuesBelow(upperLimit: number): number {
  let sum = 0;

  const fibonacci = FibonacciGenerator({ f0: 1, f1: 2 });
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
