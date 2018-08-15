const digitFactorial = memoizeDigitFactorials();

const result = sumOfAllCurious();
console.log(result);

function sumOfAllCurious() {
  let sum = 0;
  // must be a sum of digits, and stop at a reasonable limit
  for (let i = 10; i < 100000; i++) {
    if (isCurious(i)) {
      sum += i;
    }
  }
  return sum;
}

function isCurious(num: number): boolean {
  const originalNum = num;
  let sum = 0;
  while (num > 0) {
    sum += digitFactorial[num % 10];
    if (sum > originalNum) {
      return false;
    }
    num = Math.floor(num / 10);
  }
  return (originalNum === sum);
}

function memoizeDigitFactorials(): number[] {
  const factorial: number[] = [];
  factorial[0] = 1;
  for (let digit = 1; digit <= 9; digit++) {
    factorial[digit] = factorial[digit - 1] * digit;
  }
  return factorial;
}
