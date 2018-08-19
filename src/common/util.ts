import * as fs from 'fs';

export function readAllLines(path: string): string[] {
  return fs.readFileSync(path, { encoding: 'utf8' })
    .replace('\r\n', '\n')
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
