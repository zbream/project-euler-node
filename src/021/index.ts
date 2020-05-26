import { getFactors } from '../common/factor';

export function main021() {
  return sumAmicableNumbersBelow(10000);
}

export function example021() {
  return isAmicable(220) && isAmicable(284);
}

function sumAmicableNumbersBelow(upperLimit: number) {
  let sum = 0;
  for (let i = 0; i < upperLimit; i++) {
    if (isAmicable(i)) {
      sum += i;
    }
  }
  return sum;
}

function isAmicable(a: number) {
  const da = d(a);
  const db = d(da);
  return (a !== da) && (db === a);
}

function d(num: number) {
  return getFactors(num)
    .filter(curr => curr !== num)
    .reduce((sum, curr) => sum + curr, 0);
}
