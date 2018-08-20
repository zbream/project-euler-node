import { readAllLines } from '../../common/util';

export function getInputBytes(path: string): number[] {
  return readAllLines(path)[0]
    .split(',')
    .map(rawNumber => +rawNumber);
}
