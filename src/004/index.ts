import { isPalindrome } from '../common/palindrome';

export function main004() {
  return maxPalindromeProductOfTwoFactorsBelow(1000);
}

export function example004() {
  return maxPalindromeProductOfTwoFactorsBelow(100);
}

function maxPalindromeProductOfTwoFactorsBelow(upperLimit: number) {
  let largestProduct = 0;
  for (let f1 = 1; f1 < upperLimit; f1++) {
    for (let f2 = 1; f2 < upperLimit; f2++) {
      const product = f1 * f2;
      if (isPalindrome(product)) {
        if (product > largestProduct) {
          largestProduct = product;
        }
      }
    }
  }
  return largestProduct;
}
