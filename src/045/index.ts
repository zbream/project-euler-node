import {
  HexagonalNumberGenerator,
  PentagonalNumberGenerator,
  PolygonalNumberUtil,
  TriangularNumberGenerator,
} from '../common/polygonal-number';

const pentagonalNumbers = new PolygonalNumberUtil(PentagonalNumberGenerator());
const hexagonalNumbers = new PolygonalNumberUtil(HexagonalNumberGenerator());

const result = findTriangularPentagonalHexagonalNumbers(4);
console.log(result);

function findTriangularPentagonalHexagonalNumbers(toFind: number): number {
  let found = 0;
  for (const num of TriangularNumberGenerator()) {
    if (isPentagonalAndHexagonal(num)) {
      console.log(num);
      found++;
    }
    if (found === toFind) {
      return num;
    }
  }
  throw new Error();
}

function isPentagonalAndHexagonal(num: number): boolean {
  return pentagonalNumbers.isNumber(num) && hexagonalNumbers.isNumber(num);
}
