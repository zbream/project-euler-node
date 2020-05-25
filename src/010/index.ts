import { isPrime } from '../common/prime';

export function main010() {
  return sumOfPrimesBelow(2000000);
}

export function example010() {
  return sumOfPrimesBelow(10);
}

function sumOfPrimesBelow(upperLimit: number) {
  let sum = 0;
  for (let i = 2; i < upperLimit; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}
