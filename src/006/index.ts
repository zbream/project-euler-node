export function main006() {
  return diff(100);
}

export function example006() {
  return diff(10);
}

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
