const ONES = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4];
const TEENS = [3, 6, 6, 8, 8, 7, 7, 9, 8, 8];
const TENS = [0, 0, 6, 6, 5, 5, 5, 7, 6, 6];
const GROUPINGS = [0, 0, 7, 8];
const AND = 3;

export function countLettersInNumber(num: number): number {
  let total = 0;

  const digits = [...`${num}`].reverse().map(s => +s);
  const digitsCount = digits.length;

  if (digitsCount >= 4 && digits[3] !== 0) {
    // 'XXX THOUSAND'
    total += ONES[digits[3]] + GROUPINGS[3];
  }

  if (digitsCount >= 3 && digits[2] !== 0) {
    // 'XXX HUNDRED'
    total += ONES[digits[2]] + GROUPINGS[2];
    // 'AND'
    if (digits[1] !== 0 || digits[0] !== 0) {
      total += AND;
    }
  }

  if (digitsCount >= 2) {
    if (digits[1] === 1) {
      // '10-19'
      total += TEENS[digits[0]];
    } else {
      // '20-99'
      total += TENS[digits[1]];

      // 'xxx1-xxx9'
      total += ONES[digits[0]];
    }
  } else {
    total += ONES[digits[0]];
  }

  return total;
}
