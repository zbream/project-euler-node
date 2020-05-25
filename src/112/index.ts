export function main112() {
  return numWhereProportionOfBouncyReaches(0.99);
}

function numWhereProportionOfBouncyReaches(proportion: number): number {
  let numBouncy = 0;
  // no number below 99 can be bouncy, so start there
  let i = 99;
  while (numBouncy < proportion * i) {
    i++;
    if (isBouncy(i)) {
      numBouncy++;
    }
  }
  return i;
}

function isBouncy(num: number): boolean {
  return (!isIncreasing(num) && !isDecreasing(num));
}

function isIncreasing(num: number): boolean {
  // from RtL, is decreasing?
  let lastDigit = 9;
  while (num > 0) {
    const digit = num % 10;
    if (digit > lastDigit) {
      return false;
    }
    num = Math.floor(num / 10);
    lastDigit = digit;
  }
  return true;
}

function isDecreasing(num: number): boolean {
  // from RtL, is increasing?
  let lastDigit = 0;
  while (num > 0) {
    const digit = num % 10;
    if (digit < lastDigit) {
      return false;
    }
    num = Math.floor(num / 10);
    lastDigit = digit;
  }
  return true;
}
