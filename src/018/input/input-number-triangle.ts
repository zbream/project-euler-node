import { readAllLines } from '../../common/util';

export function getInputNumberTriangle(path: string): number[][] {
  return readAllLines(path)
    .filter(line => line !== '')
    .map(line => line
      .split(' ')
      .map(s => +s));
}
