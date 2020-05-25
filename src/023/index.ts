import { getFactors } from '../common/factor';

export function main023() {
  return sumOfAllNonAbundantUpTo(28123);
}

function sumOfAllNonAbundantUpTo(upperLimit: number) {
  let sum = 0;
  for (let i = 1; i <= upperLimit; i++) {
    if (!isSumOfAbundant(i)) {
      sum += i;
    }
  }
  return sum;
}

function isSumOfAbundant(num: number): boolean {
  const maxAddend = Math.floor(num / 2);
  for (let addend = 0; addend <= maxAddend; addend++) {
    if (isAbundant(addend) && isAbundant(num - addend)) {
      return true;
    }
  }
  return false;
}

function isAbundant(num: number): boolean {
  if (num < 12) {
    return false;
  } else {
    const divisorSum = getFactors(num).reduce((sum, value) => sum += value, 0) - num;
    return divisorSum > num;
  }
}
