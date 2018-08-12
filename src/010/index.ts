import { isPrime } from "../common/prime";

const test = sumOfPrimesBelow(10);
console.log(test);

const result = sumOfPrimesBelow(2000000);
console.log(result);

function sumOfPrimesBelow(upperLimit: number) {
  let sum = 0;
  for (let i = 2; i < upperLimit; i++) {
    if (isPrime(i))
    sum += i;
  }
  return sum;
}
