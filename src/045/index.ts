import {
  HexagonalNumberGenerator,
  PentagonalNumberGenerator,
  PolygonalNumberUtil,
  TriangularNumberGenerator,
} from '../common/polygonal-number';

export function main045() {
  const pentagonalNumbers = new PolygonalNumberUtil(PentagonalNumberGenerator());
  const hexagonalNumbers = new PolygonalNumberUtil(HexagonalNumberGenerator());
  return findTriangularPentagonalHexagonalNumbers(pentagonalNumbers, hexagonalNumbers, 4);
}

function findTriangularPentagonalHexagonalNumbers(
  pentagonalNumbers: PolygonalNumberUtil,
  hexagonalNumbers: PolygonalNumberUtil,
  toFind: number,
): number {
  let found = 0;
  for (const num of TriangularNumberGenerator()) {
    const isPentagonalAndHexagonal = pentagonalNumbers.isNumber(num) && hexagonalNumbers.isNumber(num);
    if (isPentagonalAndHexagonal) {
      found++;
    }
    if (found === toFind) {
      return num;
    }
  }
  throw new Error();
}
