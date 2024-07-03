import { PermutationGenerator } from '../common/permutations';

export function main032() {
  const set = new Set<number>();
  let sum = 0;
  for (const permutation of PermutationGenerator(
    '123456789'.split('').map(Number)
  )) {
    for (let i = 1; i <= 7; i++) {
      for (let j = i + 1; j <= 8; j++) {
        const a = getNumber(permutation, 0, i);
        const b = getNumber(permutation, i, j);
        const c = getNumber(permutation, j, 9);
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

function getNumber(arr: readonly number[], start: number, end: number) {
  let res = 0;
  for (let i = start; i < end; i++) {
    res *= 10;
    res += arr[i];
  }
  return res;
}
