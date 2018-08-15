import * as path from 'path';

import { createDigitStream$ } from './digit-stream';
import { ProductQueue } from './product-queue';

const FILE = 'input.txt';

const inputPath = path.join(__dirname, FILE);
const digits$ = createDigitStream$(inputPath);

const testProductQueue = new ProductQueue(4);
let testGreatestProduct = 0;
const resultProductQueue = new ProductQueue(13);
let resultGreatestProduct = 0;

digits$.subscribe({
  next: digit => {
    const testProduct = testProductQueue.nextFactor(digit);
    if (testProduct > testGreatestProduct) {
      testGreatestProduct = testProduct;
    }
    const resultProduct = resultProductQueue.nextFactor(digit);
    if (resultProduct > resultGreatestProduct) {
      resultGreatestProduct = resultProduct;
    }
  },
  complete: () => {
    console.log(testGreatestProduct);
    console.log(resultGreatestProduct);
  },
});
