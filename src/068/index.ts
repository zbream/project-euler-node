import { PermutationGenerator } from '../common/permutations';
import { range } from '../common/util';

export function main068() {
  return findMaxNgonSolutionForN(5);
}

export function example068() {
  return findMaxNgonSolutionForN(3);
}

/**
 * A unique set of numbers to identify an ngon, where each node is represented once in the set.
 *
 * - Start at any external node.
 * - Consume two numbers to fill the start of that "spoke".
 * - Move clockwise to the next spoke, and repeat until the ngon is filled.
 *
 * @example
 *
 * ```
 * 436251
 * ```
 *
 * to
 *
 * ```
 *    4
 *     \
 *      3
 *     / \
 *    1 — 2 — 6
 *   /
 * 5
 * ```
 */
type NgonSeed = readonly number[];

function findMaxNgonSolutionForN(n: number): string {
  const solutions = findNgonSolutionsForN(n);
  return solutions.sort((a, b) => a.localeCompare(b))[solutions.length - 1];
}

function findNgonSolutionsForN(n: number): string[] {
  const result = new Set<string>();
  for (const seed of PermutationGenerator(ngonStart(n))) {
    if (ngonSolution(seed) !== undefined) {
      result.add(ngonString(seed));
    }
  }
  return [...result];
}

function ngonStart(n: number): NgonSeed {
  return range(1, n * 2);
}

function ngonSolution(seed: NgonSeed): number | undefined {
  const [n, m] = ngonStats(seed);

  let result: number | undefined;
  for (let i = 0; i < n; i++) {
    const index = i * 2;
    let rowResult = 0;
    rowResult += seed[(index + 0) % m];
    rowResult += seed[(index + 1) % m];
    rowResult += seed[(index + 3) % m];
    if (result === undefined) {
      result = rowResult;
    } else if (result !== rowResult) {
      return undefined;
    }
  }
  return result;
}

function ngonString(seed: NgonSeed) {
  const [n, m] = ngonStats(seed);

  let result = '';
  let index = ngonLowestExternalNodeIndex(seed);
  for (let i = 0; i < n; i++) {
    result += seed[(index + 0) % m];
    result += seed[(index + 1) % m];
    result += seed[(index + 3) % m];
    index += 2;
  }

  return result;
}

function ngonLowestExternalNodeIndex(seed: NgonSeed): number {
  const [n] = ngonStats(seed);

  let min = Infinity;
  let minIndex = -1;
  for (let i = 0; i < n; i++) {
    const node = seed[i * 2];
    if (node < min) {
      min = node;
      minIndex = i * 2;
    }
  }

  return minIndex;
}

function ngonStats(seed: readonly number[]) {
  return [seed.length / 2, seed.length];
}
