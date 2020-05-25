import { getFactors } from '../common/factor';
import { TriangularNumberGenerator } from '../common/polygonal-number';

export function main012() {
  return firstTriangleNumberWithOverNumFactors(500);
}

export function example012() {
  return firstTriangleNumberWithOverNumFactors(5);
}

function firstTriangleNumberWithOverNumFactors(num: number): number {
  for (const triangleNumber of TriangularNumberGenerator()) {
    const factors = getFactors(triangleNumber);
    if (factors.length >= num) {
      return triangleNumber;
    }
  }
  throw new Error('This should have returned.');
}
