export {};

type TriangleSides = [number, number, number];

export function main039() {
  return findMaxBetween(1, 1000);
}

export function example039() {
  return numSolutionsFor(120);
}

function findMaxBetween(p1: number, p2: number) {
  let maxP = 0;
  let maxSolutions = 0;

  for (let p = p1; p <= p2; p++) {
    const solutions = numSolutionsFor(p);
    if (solutions > maxSolutions) {
      maxP = p;
      maxSolutions = solutions;
    }
  }

  return maxP;
}

function numSolutionsFor(p: number): number {
  let solutions = 0;

  const triangle: TriangleSides = [0, 0, 0];
  let start = 1;

  for (;;) {
    triangle[0] = start;
    triangle[1] = start;
    triangle[2] = p - (start + start);
    if (triangle[2] < 1) {
      break;
    }

    for (;;) {
      if (isRightTriangle(triangle)) {
        solutions++;
      }
      triangle[1]++;
      triangle[2]--;
      if (triangle[2] < triangle[1]) {
        break;
      }
    }

    start++;
  }

  return solutions;
}

function isRightTriangle([a, b, c]: TriangleSides): boolean {
  return (a * a + b * b === c * c);
}
