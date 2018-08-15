import { getFactors } from '../common/factor';
import { TriangularNumberGenerator } from '../common/polygonal-number';

const test = firstTriangleNumberWithOverNumFactors(5);
console.log(test);

const result = firstTriangleNumberWithOverNumFactors(500);
console.log(result);

function firstTriangleNumberWithOverNumFactors(num: number): number {
  for (const triangleNumber of TriangularNumberGenerator()) {
    const factors = getFactors(triangleNumber);
    if (factors.length >= num) {
      return triangleNumber;
    }
  }
  throw new Error('This should have returned.');
}
