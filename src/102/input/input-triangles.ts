import { readAllLines } from '../../common/util';
import { Triangle } from '../triangle';

export function getInputTriangles(path: string): Triangle[] {
  return readAllLines(path)
    .filter(line => line !== '')
    .map(line => line
      .split(',')
      .map(num => +num))
    .map(numArray => ({
      a: { x: numArray[0], y: numArray[1] },
      b: { x: numArray[2], y: numArray[3] },
      c: { x: numArray[4], y: numArray[5] },
    }));
}
