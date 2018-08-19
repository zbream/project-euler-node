import { memoizeDigitTransform } from '../common/util';

const POWER = 5;
const digitPower = memoizeDigitTransform(digit => Math.pow(digit, POWER));

const result = sumAllNumbersThatEqualSumOfDigitsPowered();
console.log(result);

function sumAllNumbersThatEqualSumOfDigitsPowered(): number {
  const min = 10;
  const max = digitPower[9] * 6;

  let sum = 0;
  for (let i = min; i <= max; i++) {
    if (i === sumDigitsPowered(i)) {
      sum += i;
    }
  }
  return sum;
}

function sumDigitsPowered(num: number): number {
  let sum = 0;
  while (num > 0) {
    sum += digitPower[(num % 10)];
    num = Math.floor(num / 10);
  }
  return sum;
}
