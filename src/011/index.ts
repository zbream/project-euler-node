import { join } from 'path';

import { getInputNumberGrid } from './input/input-number-grid';

export function main011() {
  const inputPath = join(__dirname, 'input/input.txt');
  const n = 20;

  const inputGrid = getInputNumberGrid(inputPath, n, n);
  return greatestProductOfFourAdjacent(inputGrid, n, n);
}

function greatestProductOfFourAdjacent(grid: number[][], gridWidth: number, gridHeight: number): number {
  let greatestProduct = 0;
  function check(product: number) {
    if (product > greatestProduct) {
      greatestProduct = product;
    }
  }

  for (let gridRow = 0; gridRow < gridHeight; gridRow++) {
    for (let gridColumn = 0; gridColumn < gridWidth; gridColumn++) {

      // test horizontal
      if (gridColumn <= gridWidth - 4) {
        let product = 1;
        for (let column = 0; column < 4; column++) {
          product *= grid[gridRow][gridColumn + column];
        }
        check(product);
      }

      // test vertical
      if (gridRow <= gridHeight - 4) {
        let product = 1;
        for (let row = 0; row < 4; row++) {
          product *= grid[gridRow + row][gridColumn];
        }
        check(product);
      }

      // test diagonal right/down
      if (gridColumn <= gridWidth - 4 && gridRow <= gridHeight - 4) {
        let product = 1;
        for (let row = 0, column = 0; column < 4; row++, column++) {
          product *= grid[gridRow + row][gridColumn + column];
        }
        check(product);
      }

      // test diagonal right/up
      if (gridColumn <= gridWidth - 4 && gridRow >= 3) {
        let product = 1;
        for (let row = 0, column = 0; column < 4; row--, column++) {
          product *= grid[gridRow + row][gridColumn + column];
        }
        check(product);
      }

    }
  }
  return greatestProduct;
}
