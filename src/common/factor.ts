export function* FactorGenerator(num: number): IterableIterator<number> {
  const max = Math.sqrt(num);
  for (let factor = 1; factor <= max; factor++) {
    if (num % factor === 0) {
      yield factor;
      if (Math.floor(factor * factor) !== num) {
        yield Math.floor(num / factor);
      }
    }
  }
}

export function getFactors(num: number): number[] {
  return [...FactorGenerator(num)];
}

export function getGreatestCommonDivisor(a: number, b: number): number {
  return b ? getGreatestCommonDivisor(b, a % b) : a;
}
