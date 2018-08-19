import { PrimeCache } from '../common/prime';
import { countDigits } from '../common/util';

const primeCache = new PrimeCache();

const result = sumAllInteresting();
console.log(result);

function sumAllInteresting() {
  let sum = 0;
  for (let i = 11, found = 0; found < 11; i++) {
    if (isInteresting(i)) {
      sum += i;
      found++;
    }
  }
  return sum;
}

function isInteresting(num: number) {
  return (isTruncatablePrimeR(num) && isTruncatablePrimeL(num));
}

function isTruncatablePrimeL(num: number) {
  while (num > 0) {
    if (!primeCache.isPrime(num)) {
      return false;
    }
    const digits = countDigits(num);
    const mostSignificantPlace = Math.pow(10, digits - 1);
    num %= mostSignificantPlace;
  }
  return true;
}

function isTruncatablePrimeR(num: number) {
  while (num > 0) {
    if (!primeCache.isPrime(num)) {
      return false;
    }
    num = Math.floor(num / 10);
  }
  return true;
}
