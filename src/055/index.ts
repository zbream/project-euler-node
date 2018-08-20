import BigInteger from 'big-integer';

import { isPalindrome } from '../common/palindrome';

const result = numLychrelNumbersBelow(10000, 50);
console.log(result);

function numLychrelNumbersBelow(upperLimit: number, maxIterations: number): number {
  let count = 0;
  for (let i = 1; i < upperLimit; i++) {
    if (isLychrelNumber(i, maxIterations)) {
      count++;
    }
  }
  return count;
}

function isLychrelNumber(num: number, maxIterations: number): boolean {
  for (const term of ReverseAddGenerator(num)) {
    if (isPalindrome(term.toString())) {
      return false;
    }
    maxIterations--;
    if (maxIterations === 0) {
      return true;
    }
  }
  throw new Error();
}

function* ReverseAddGenerator(seed: BigInteger.BigNumber) {
  let value = BigInteger(seed as any);
  while (true) {
    let trash = value;
    let reversed = BigInteger.zero;
    while (!trash.isZero()) {
      const { quotient, remainder } = trash.divmod(10);
      reversed = reversed.times(10).plus(remainder);
      trash = quotient;
    }
    value = value.add(reversed);
    yield value;
  }
}
