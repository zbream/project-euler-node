import { PermutationGenerator } from '../common/permutations';
import { numberFromDigitArray } from '../common/util';

export function main032() {
  const set = new Set<number>();
  let sum = 0;
  for (const permutation of PermutationGenerator(
    '123456789'.split('').map(Number)
  )) {
    for (let i = 1; i <= 7; i++) {
      for (let j = i + 1; j <= 8; j++) {
        const a = numberFromDigitArray(permutation, 0, i);
        const b = numberFromDigitArray(permutation, i, j);
        const c = numberFromDigitArray(permutation, j, 9);
        // console.log(`${a}x${b}=${c}`);
        if (a * b === c && !set.has(c)) {
          set.add(c);
          sum += c;
        }
      }
    }
  }
  return sum;
}
