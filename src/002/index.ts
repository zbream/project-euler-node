import { FibonacciSequencer } from "../common/fibonacci";

const result = sumOfEvenFibonacciValuesBelow(4000000);
console.log(result);

function sumOfEvenFibonacciValuesBelow(upperLimit: number): number {
  const fibonacci = new FibonacciSequencer({ f0: 1, f1: 2 });
  let sum = 0;

  let current = 0;
  while ((current = fibonacci.getNext()) < upperLimit) {
    if (current % 2 === 0) {
      sum += current;
    }
  }

  return sum;
}
