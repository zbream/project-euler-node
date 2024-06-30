import { readAllLines } from '../../common/util';

export function getInputAttempts(path: string) {
  return readAllLines(path).filter((line) => line !== '');
}
