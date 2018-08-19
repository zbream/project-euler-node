import * as path from 'path';
import { getInputTriangles } from './input/input-triangles';
import { Point, Triangle, triangleContains } from './triangle';

const PATH = 'input/input.txt';

const inputPath = path.join(__dirname, PATH);
const inputTriangles = getInputTriangles(inputPath);

const result = numTrianglesContainingOrigin(inputTriangles);
console.log(result);

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
