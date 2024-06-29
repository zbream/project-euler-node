export function main062() {
  return smallestCubeWithNCubePermutations(5);
}

export function example062() {
  return smallestCubeWithNCubePermutations(3);
}

function smallestCubeWithNCubePermutations(n: number) {
  const cache = new Map<string, { smallest: number, count: number }>();
  for (let b = 1; ; b++) {
    const cube = b ** 3;
    const cubeId = getPermutationId(cube);
    const record = cache.get(cubeId);
    if (!record) {
      cache.set(cubeId, { smallest: cube, count: 1});
    } else {
      record.count++;
      if (record.count === n) {
        return record.smallest;
      }
    }
  }
}

/**
 * Generate an ID unique to all permutations of a number's digits.
 *
 * @example
 *
 * - 3214 => 1234
 * - 3412 => 1234
 * - 4432 => 2344
 */
function getPermutationId(num: number) {
  return `${num}`.split('').sort().join('');
}
