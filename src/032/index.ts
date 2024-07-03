import { PermutationGenerator } from '../common/permutations';

export function main032() {
  const set = new Set<number>();
  let sum = 0;
  for (const permutation of PermutationGenerator('123456789'.split(''))) {
    for (let i = 1; i <= 7; i++) {
      for (let j = i + 1; j <= 8; j++) {
        const a = +permutation.slice(0, i).join('');
        const b = +permutation.slice(i, j).join('');
        const c = +permutation.slice(j).join('');
        if (a * b === c && !set.has(c)) {
          set.add(c);
          sum += c;
        }
      }
    }
  }
  return sum;
}
