import { readAllLines } from '../../common/util';

export function getInputWords(path: string): string[] {
  return readAllLines(path)[0]
    .split(',')
    .map(str => str.slice(1, str.length - 1));
}
