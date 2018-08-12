import { isPrime } from "../common/prime";

const test = maxPrimeFactorOf(13195);
console.log(test);

const result = maxPrimeFactorOf(600851475143);
console.log(result);

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
