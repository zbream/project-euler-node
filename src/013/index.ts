import { join } from 'path';

import { getInputNumberList } from './input/input-number-list';

export function main013() {
  const inputPath = join(__dirname, 'input/input.txt');
  const numNumbers = 100;
  const numDigits = 50;

  const inputNumberList = getInputNumberList(inputPath, numNumbers, numDigits);
  return firstTenDigitsOfSum(inputNumberList, numNumbers, numDigits);
}

function firstTenDigitsOfSum(numberList: number[][], numNumbers: number, numDigits: number) {
  // store result in order from least-significant to most-significant
  let sum = '';
  let carryover = 0;

  // calculate sum
  for (let digit = 0; digit < numDigits; digit++) {
    let columnSum = carryover;
    for (let num = 0; num < numNumbers; num++) {
      columnSum += numberList[num][digit];
    }
    sum += (columnSum % 10);
    carryover = Math.floor(columnSum / 10);
  }
  while (carryover > 0) {
    sum += (carryover % 10);
    carryover = Math.floor(carryover / 10);
  }

  // reverse to get final result
  return +[...sum].reverse().join('').slice(0, 10);
}
