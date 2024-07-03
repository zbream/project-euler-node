import { readAllLines } from '../../common/util';

export function getInputSudokuBoards(path: string): number[][] {
  return readAllLines(path)
    .join('')
    .split(/Grid \d\d/)
    .slice(1)
    .map((str) => str.split('').map(Number));
}
