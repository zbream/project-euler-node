export {};

const test = diff(10);
console.log(test);

const result = diff(100);
console.log(result);

function diff(upperLimitInclusive: number): number {
  return squareOfSum(upperLimitInclusive) - sumOfSquares(upperLimitInclusive);
}

function sumOfSquares(upperLimitInclusive: number): number {
  let sum = 0;
  for (let i = 1; i <= upperLimitInclusive; i++) {
    sum += (i * i);
  }
  return sum;
}

function squareOfSum(upperLimitInclusive: number): number {
  let sum = 0;
  for (let i = 1; i <= upperLimitInclusive; i++) {
    sum += i;
  }
  return sum * sum;
}
