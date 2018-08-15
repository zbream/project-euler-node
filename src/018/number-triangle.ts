import { readAllLines } from '../common/util';

export function readFromFile(path: string): number[][] {
  return readAllLines(path)
    .filter(line => line !== '')
    .map(line => line
      .split(' ')
      .map(s => +s)
    );
}

export function findMaxPathTotal(triangle: number[][]): number {
  const rows = triangle.length;

  // start at the bottom
  for (let row = rows - 1; row > 0; row--) {
    // go through each pair
    for (let column = 0; column < row; column++) {
      // find the max of the pair
      const max = Math.max(triangle[row][column], triangle[row][column + 1]);
      // add it to the above-row's number at that column position
      triangle[row - 1][column] += max;
    }
  }

  // the peak is now the maximum total
  return triangle[0][0];
}
