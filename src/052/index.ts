export function main052() {
  return findSmallestPermutedMultiple();
}

function findSmallestPermutedMultiple(): number {
  for (let i = 1;; i++) {
    if (isPermutedMultiple(i)) {
      return i;
    }
  }
}

function isPermutedMultiple(num: number): boolean {
  const digits = getDigits(num);
  for (let multiplier = 2; multiplier <= 6; multiplier++) {
    const multiplierDigits = getDigits(num * multiplier);
    if (!isEqual(digits, multiplierDigits)) {
      return false;
    }
  }
  return true;
}

function getDigits(num: number): number[] {
  const digits = new Array<number>(10).fill(0);
  while (num > 0) {
    digits[num % 10]++;
    num = Math.floor(num / 10);
  }
  return digits;
}

function isEqual(digits1: number[], digits2: number[]): boolean {
  for (let i = 0; i < 10; i++) {
    if (digits1[i] !== digits2[i]) {
      return false;
    }
  }
  return true;
}
