import { PermutationGenerator } from "../common/permutations";
import { isPrime } from "../common/prime";
import { range } from "../common/util";

export function main041() {
  return findLargestPandigitalPrime();
}

function findLargestPandigitalPrime() {
  // The permutation generator can't guarantee the order within a particular length,
  // so evaluate each length individually, starting at the largest.
  // If we find a max pandigital prime, no need to continue checking smaller values.
  for (let n = 9; n >= 1; n--) {
    const num = findLargestPandigitalPrimeOfLength(n);
    if (num) {
      return num;
    }
  }
}

function findLargestPandigitalPrimeOfLength(n: number) {
  const digits = range(1, n);
  let max = 0;
  for (const permutation of PermutationGenerator(digits)) {
    const num = +permutation.join("");
    if (isPrime(num) && num > max) {
      max = num;
    }
  }
  return max;
}
