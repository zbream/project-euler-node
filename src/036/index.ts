import { isPalindrome } from '../common/palindrome';

export function main036() {
  return sumOfAllPalindromicInBasesBelow(1000000);
}

export function example036() {
  return isPalindromicInBases(585);
}

function sumOfAllPalindromicInBasesBelow(upperLimit: number): number {
  let sum = 0;
  for (let i = 1; i < upperLimit; i++) {
    if (isPalindromicInBases(i)) {
      sum += i;
    }
  }
  return sum;
}

function isPalindromicInBases(num: number): boolean {
  return (isPalindrome(`${num}`) && isPalindrome(num.toString(2)));
}
