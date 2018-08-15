import { isPalindrome } from '../common/palindrome';

const result = sumOfAllPalindromicInBasesBelow(1000000);
console.log(result);

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
