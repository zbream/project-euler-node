/**
 * Generate all permutations of the values of an array, in no implied order.
 * **The yielded array must remain unmodified by the consumer!**
 *
 * Uses [Heap's Algorithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm).
 */
export function PermutationGenerator<T>(a: T[]) {
  return generate(a.length, [...a]);
}

function* generate<T>(k: number, a: T[]): Generator<readonly T[], void> {
  if (k === 1) {
    yield a;
  } else {
    yield* generate(k - 1, a);
    for (let i = 0; i < k - 1; i++) {
      const temp = a[k - 1];
      if (k % 2 === 0) {
        a[k - 1] = a[i];
        a[i] = temp;
      } else {
        a[k - 1] = a[0];
        a[0] = temp;
      }
      yield* generate(k - 1, a);
    }
  }
}
