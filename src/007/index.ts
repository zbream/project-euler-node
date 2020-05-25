import { isPrime } from '../common/prime';

export function main007() {
  return nthPrime(10001);
}

export function example007() {
  return nthPrime(6);
}

function nthPrime(n: number): number {
  let testNumber = 1;
  let primesFound = 0;

  while (primesFound < n) {
    testNumber++;
    if (isPrime(testNumber)) {
      primesFound++;
    }
  }
  return testNumber;
}
