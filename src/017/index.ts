import { countLettersInNumber } from './number-letters';

export function main017() {
  let total = 0;
  for (let i = 1; i <= 1000; i++) {
    total += countLettersInNumber(i);
  }
  return total;
}
