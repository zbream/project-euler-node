import { readAllLines } from '../../common/util';

export function getInputNumberList(path: string, numRows: number, numDigits: number): number[][] {
  // convert to array of arrays of digits, in order of least-significant to most-significant
  return readAllLines(path)
    .slice(0, numRows)
    .map(row => [...row]
      .slice(0, numDigits)
      .reverse()
      .map(s => +s));
}
