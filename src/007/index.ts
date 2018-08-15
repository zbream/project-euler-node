import { isPrime } from '../common/prime';

const test = nthPrime(6);
console.log(test);

const result = nthPrime(10001);
console.log(result);

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
