import * as path from 'path';

import { getInputNumberList } from './input/input-number-list';

const FILE = 'input/input.txt';
const NUM_NUMBERS = 100;
const NUM_DIGITS = 50;

const inputPath = path.join(__dirname, FILE);
const inputNumberList = getInputNumberList(inputPath, NUM_NUMBERS, NUM_DIGITS);

const result = firstTenDigitsOfSum(inputNumberList, NUM_NUMBERS, NUM_DIGITS);
console.log(result);

function firstTenDigitsOfSum(numberList: number[][], numNumbers: number, numDigits: number): string {
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
  return [...sum].reverse().join('').slice(0, 10);
}
