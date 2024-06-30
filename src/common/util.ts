import * as fs from 'fs';

export function readAllLines(path: string): string[] {
  return fs.readFileSync(path, { encoding: 'utf8' })
    .replaceAll('\r\n', '\n')
    .split('\n');
}

export function countDigits(num: number): number {
  return Math.floor(Math.log10(Math.abs(num)) + 1);
}

export function range(start: number, count: number): number[] {
  return [...Array(count).keys()].map(i => i + start);
}

export function factorial(num: number): number {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

export function memoizeDigitTransform(transform: (num: number) => number): number[] {
  const result = new Array<number>(10);
  for (let i = 0; i <= 9; i++) {
    result[i] = transform(i);
  }
  return result;
}

/**
 * Generate an ID unique to all permutations of a number's digits.
 *
 * @example
 *
 * - 3214 => 1234
 * - 3412 => 1234
 * - 4432 => 2344
 */
export function digitPermutationId(num: number) {
  return `${num}`.split('').sort().join('');
}
