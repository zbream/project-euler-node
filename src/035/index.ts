import { PrimeCache } from '../common/prime';
import { numDigits } from '../common/util';

const primeCache = new PrimeCache();

const result = countCircularPrimesBelow(1000000);
console.log(result);

function countCircularPrimesBelow(upperLimit: number): number {
  let count = 0;
  for (let i = 1; i < upperLimit; i++) {
    if (isCircularPrime(i)) {
      count++;
    }
  }
  return count;
}

function isCircularPrime(num: number): boolean {
  const digits = numDigits(num);
  const originalNum = num;
  do {
    if (!primeCache.isPrime(num)) {
      return false;
    }
    num = rotate(num, digits);
  } while (num !== originalNum);
  return true;
}

function rotate(num: number, numDigits: number): number {
  const lastDigit = num % 10;
  num = Math.floor(num / 10);
  num += (lastDigit * Math.pow(10, numDigits - 1));
  return num;
}
