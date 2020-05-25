export function main005() {
  return smallestNumberDivisibleByAllUpTo(20);
}

export function example005() {
  return smallestNumberDivisibleByAllUpTo(10);
}

function smallestNumberDivisibleByAllUpTo(upperLimitInclusive: number): number {
  let testNumber = 1;
  while (!isNumberDivisibleByAllUpTo(testNumber, upperLimitInclusive)) {
    testNumber++;
  }
  return testNumber;
}

function isNumberDivisibleByAllUpTo(num: number, upperLimitInclusive: number): boolean {
  for (let divisor = 1; divisor <= upperLimitInclusive; divisor++) {
    if (num % divisor !== 0) {
      return false;
    }
  }
  return true;
}
