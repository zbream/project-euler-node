export {};

const test = smallestNumberDivisibleByAllUpTo(10);
console.log(test);

const result = smallestNumberDivisibleByAllUpTo(20);
console.log(result);

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
