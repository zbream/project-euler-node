import * as path from 'path';

import { getNumberGrid } from './number-grid';

const FILE = 'input.txt';
const N = 20;

const inputPath = path.join(__dirname, FILE);
const inputGrid = getNumberGrid(inputPath, N, N);

const result = greatestProductOf4Adjacent(inputGrid, N, N);
console.log(result);

function greatestProductOf4Adjacent(grid: number[][], gridWidth: number, gridHeight: number): number {
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
