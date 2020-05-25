import { join } from 'path';

import { getInputTriangles } from './input/input-triangles';
import { Point, Triangle, triangleContains } from './triangle';

export function main102() {
  const inputPath = join(__dirname, 'input/input.txt');
  const inputTriangles = getInputTriangles(inputPath);
  return numTrianglesContainingOrigin(inputTriangles);
}

function numTrianglesContainingOrigin(triangles: Triangle[]): number {
  const origin: Point = { x: 0, y: 0 };
  let count = 0;
  for (const triangle of triangles) {
    if (triangleContains(triangle, origin)) {
      count++;
    }
  }
  return count;
}
