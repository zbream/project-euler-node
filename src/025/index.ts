import { FibonacciGenerator } from '../common/fibonacci';

export function main025() {
  return firstTermToContainDigits(1000).index;
}

export function example025() {
  return firstTermToContainDigits(3).index;
}

function firstTermToContainDigits(digits: number) {
  const fibonacci = FibonacciGenerator(0n, 1n);
  let index = -1;
  for (const term of fibonacci) {
    index++;
    if (term.toString().length >= digits) {
      return { index, term };
    }
  }
  throw new Error();
}
