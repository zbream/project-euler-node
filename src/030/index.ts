import { memoizeDigitTransform } from '../common/util';

export function main030() {
  const digitPowers = memoizeDigitTransform(digit => digit ** 5);
  return sumAllNumbersThatEqualSumOfDigitsPowered(digitPowers);
}

export function example030() {
  const digitPowers = memoizeDigitTransform(digit => digit ** 4);
  return sumAllNumbersThatEqualSumOfDigitsPowered(digitPowers);
}

function sumAllNumbersThatEqualSumOfDigitsPowered(digitPowers: number[]): number {
  const min = 10;
  const max = digitPowers[9] * 6;

  let sum = 0;
  for (let i = min; i <= max; i++) {
    if (i === sumOfDigitsPowered(digitPowers, i)) {
      sum += i;
    }
  }
  return sum;
}

function sumOfDigitsPowered(digitPowers: number[], num: number): number {
  let sum = 0;
  while (num > 0) {
    sum += digitPowers[(num % 10)];
    num = Math.floor(num / 10);
  }
  return sum;
}
