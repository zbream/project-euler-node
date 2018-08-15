import { PolygonalNumberUtil, PentagonalNumberGenerator, HexagonalNumberGenerator, TriangularNumberGenerator } from "../common/polygonal-number";

const triangularGenerator = TriangularNumberGenerator();
const pentagonalNumbers = new PolygonalNumberUtil(PentagonalNumberGenerator());
const hexagonalNumbers = new PolygonalNumberUtil(HexagonalNumberGenerator());

const result = findTriangularPentagonalHexagonalNumbers(4);
console.log(result);

function findTriangularPentagonalHexagonalNumbers(toFind: number): number {
  let found = 0;
  const triangularGenerator = TriangularNumberGenerator();
  for (const num of triangularGenerator) {
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
