import { PermutationGenerator } from '../common/permutations';
import { numberFromDigitArray } from '../common/util';

const tests = [
  [1, 2],
  [2, 3],
  [3, 5],
  [4, 7],
  [5, 11],
  [6, 13],
  [7, 17],
];

export function main043() {
  let sum = 0;
  for (const permutation of PermutationGenerator(
    '1234567890'.split('').map(Number)
  )) {
    const hasProperty = tests.every(
      ([start, divisor]) =>
        numberFromDigitArray(permutation, start, start + 3) % divisor === 0
    );
    if (hasProperty) {
      sum += numberFromDigitArray(permutation, 0, 10);
    }
  }
  return sum;
}
