import { factorial, memoizeDigitTransform } from '../common/util';

const digitFactorial = memoizeDigitTransform(digit => factorial(digit));

export function main034() {
  return sumOfAllCurious();
}

export function example034() {
  return isCurious(145);
}

function sumOfAllCurious() {
  let sum = 0;
  // must be a sum of digits, and stop at a reasonable limit
  for (let i = 10; i < 100000; i++) {
    if (isCurious(i)) {
      sum += i;
    }
  }
  return sum;
}

function isCurious(num: number): boolean {
  const originalNum = num;
  let sum = 0;
  while (num > 0) {
    sum += digitFactorial[num % 10];
    if (sum > originalNum) {
      return false;
    }
    num = Math.floor(num / 10);
  }
  return (originalNum === sum);
}
