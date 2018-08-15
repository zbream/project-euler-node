export function triangularNumberByTerm(n: number): number {
  return (n * (n + 1)) / 2;
}

export function pentagonalNumberByTerm(n: number): number {
  return (n * (3 * n - 1)) / 2;
}

export function hexagonalNumberByTerm(n: number): number {
  return (n * (2 * n - 1));
}

export function TriangularNumberGenerator() {
  return polygonalNumberGenerator(triangularNumberByTerm);
}

export function PentagonalNumberGenerator() {
  return polygonalNumberGenerator(pentagonalNumberByTerm);
}

export function HexagonalNumberGenerator() {
  return polygonalNumberGenerator(hexagonalNumberByTerm);
}

export class PolygonalNumberUtil {

  private readonly cache = new Map<number, boolean>();
  private highestPolygonalNumber = -1;

  constructor(private generator: IterableIterator<number>) {}

  isNumber(num: number): boolean {
    // check if we WOULD have found this by now
    if (num > this.highestPolygonalNumber) {
      // keep going until we either find the number or pass it
      let polygonalNumber: number;
      while (true) {
        polygonalNumber = this.generator.next().value;
        this.highestPolygonalNumber = polygonalNumber;
        this.cache.set(polygonalNumber, true);
        if (polygonalNumber >= num) {
          break;
        }
      }
    }
    return this.cache.has(num);
  }

}

function* polygonalNumberGenerator(formula: (n: number) => number) {
  let term = 0;
  while (true) {
    yield formula(term++);
  }
}
