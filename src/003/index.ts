import { isPrime } from '../common/prime';

export function main003() {
  return maxPrimeFactorOf(600851475143);
}

export function example003() {
  return maxPrimeFactorOf(13195);
}

function maxPrimeFactorOf(num: number): number {
  let i = Math.ceil(Math.sqrt(num));
  for (; i > 0; i--) {
    // check if a factor
    if (num % i === 0) {
      // check if prime
      if (isPrime(i)) {
        return i;
      }
    }
  }
  return 0;
}
