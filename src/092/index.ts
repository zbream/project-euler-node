import { memoizeDigitTransform } from '../common/util';

const digitSquared = memoizeDigitTransform(digit => digit * digit);

const result = numChainsWhereFinalIs89UpTo(10000000);
console.log(result);

function numChainsWhereFinalIs89UpTo(upperLimit: number): number {
  let count = 0;
  for (let i = 1; i < upperLimit; i++) {
    if (chainFinal(i) === 89) {
      count++;
    }
  }
  return count;
}

function chainFinal(num: number) {
  while (num !== 1 && num !== 89) {
    num = sumDigitsSquared(num);
  }
  return num;
}

function sumDigitsSquared(num: number): number {
  let sum = 0;
  while (num > 0) {
    sum += digitSquared[num % 10];
    num = Math.floor(num / 10);
  }
  return sum;
}
