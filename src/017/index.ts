import { countLettersInNumber } from './number-letters';

let total = 0;
for (let i = 1; i <= 1000; i++) {
  total += countLettersInNumber(i);
}

console.log(total);
