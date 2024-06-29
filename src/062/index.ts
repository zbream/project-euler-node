import { digitPermutationId } from "../common/util";

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
    const cubeId = digitPermutationId(cube);
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
