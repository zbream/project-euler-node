import { isPalindrome } from '../common/palindrome';

export function main055() {
  return numLychrelNumbersBelow(10000, 50);
}

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

function* ReverseAddGenerator(seed: number) {
  let value = BigInt(seed);
  while (true) {
    let trash = value;
    let reversed = 0n;
    while (trash !== 0n) {
      const quotient = trash / 10n;
      const remainder = trash % 10n;
      reversed = reversed * 10n + remainder;
      trash = quotient;
    }
    value = value + reversed;
    yield value;
  }
}
