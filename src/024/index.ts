import { factorial, range } from '../common/util';

const DIGITS = range(0, 10).map(num => `${num}`);
const N = 1000000;

const result = findNthPermutation(DIGITS, N - 1);
console.log(result);

function findNthPermutation(chars: string[], n: number) {
  let result = '';

  const listRemainingChars = chars.slice();
  let nthPermutationOfRemainingChars = n;

  for (let numRemainingChars = listRemainingChars.length; numRemainingChars > 0; numRemainingChars--) {
    // for each possible char in the current position, there is a group of possible remaining permutations
    const groupSize = factorial(numRemainingChars - 1);
    // determine what group our desired permutation is in
    const groupIndex = Math.floor(nthPermutationOfRemainingChars / groupSize);
    // this group corresponds to the current position's char, move it to output
    result += listRemainingChars[groupIndex];
    listRemainingChars.splice(groupIndex, 1);
    // limit the desired permutation to the remaining characters within the group
    nthPermutationOfRemainingChars %= groupSize;
  }

  return result;
}
