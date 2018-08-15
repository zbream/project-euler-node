import { isPalindrome } from '../common/palindrome';

const test = maxPalindromeProductOfTwoFactorsBelow(100);
console.log(test);

const result = maxPalindromeProductOfTwoFactorsBelow(1000);
console.log(result);

function maxPalindromeProductOfTwoFactorsBelow(upperLimit: number) {
  let largestProduct = 0;
  for (let f1 = 1; f1 < upperLimit; f1++)
  for (let f2 = 1; f2 < upperLimit; f2++) {
    const product = f1 * f2;
    if (isPalindrome(product)) {
      if (product > largestProduct) {
        largestProduct = product;
      }
    }
  }
  return largestProduct;
}
