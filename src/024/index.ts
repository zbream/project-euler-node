import { factorial, range } from '../common/util';

export function main024() {
  const digits = range(0, 10).map(num => `${num}`);
  const n = 1000000;
  return +findNthPermutation(digits, n - 1);
}

function findNthPermutation(chars: string[], n: number) {
  let resultPermutation = '';

  const listRemainingChars = chars.slice();
  let nthPermutationOfRemainingChars = n;

  for (let numRemainingChars = listRemainingChars.length; numRemainingChars > 0; numRemainingChars--) {
    // for each possible char in the current position, there is a group of possible remaining permutations
    const groupSize = factorial(numRemainingChars - 1);
    // determine what group our desired permutation is in
    const groupIndex = Math.floor(nthPermutationOfRemainingChars / groupSize);
    // this group corresponds to the current position's char, move it to output
    resultPermutation += listRemainingChars[groupIndex];
    listRemainingChars.splice(groupIndex, 1);
    // limit the desired permutation to the remaining characters within the group
    nthPermutationOfRemainingChars %= groupSize;
  }

  return resultPermutation;
}
