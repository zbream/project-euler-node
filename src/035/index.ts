import { PrimeCache } from '../common/prime';
import { countDigits } from '../common/util';

const primeCache = new PrimeCache();

main035();

export function main035() {
  return countCircularPrimesBelow(1000000);
}

export function example035() {
  return isCircularPrime(197);
}

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
  const digits = countDigits(num);
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
