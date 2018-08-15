// MATH SOLUTION
// Consider finding all the combinations that, out of 40 moves, 20 right moves can be made.
// Essentially, C(40,20) .

export {};

const test = countPathsToCorner(2, 2);
console.log(test);

const result = countPathsToCorner(20, 20);
console.log(result);

function countPathsToCorner(gridWidth: number, gridHeight: number): number {
  // there is 1 more row/column of intersections
  const width = gridWidth + 1;
  const height = gridHeight + 1;

  // initialize grid of paths
  const routes: number[][] = [];
  for (let i = 0; i < height; i++) {
    routes[i] = new Array(width).fill(0);
  }

  // along right/bottom edge, there is only 1 possible route
  for (let row = 0; row < height; row++) {
    routes[row][width - 1] = 1;
  }
  for (let col = 0; col < width; col++) {
    routes[height - 1][col] = 1;
  }

  // go through each remaining cell, determine possible routes based on right/bottom
  for (let row = height - 2; row >= 0; row--)
  for (let col = width - 2; col >= 0; col--) {
    routes[row][col] = routes[row + 1][col] + routes[row][col + 1];
  }

  // and from the origin?
  return routes[0][0];
}
