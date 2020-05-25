import { join } from 'path';
import { map, reduce } from 'rxjs/operators';

import { getInputDigitStream$ } from './input/input-digit-stream';
import { ProductQueue } from './product-queue';

const inputPath = join(__dirname, 'input/input.txt');

export function main008() {
  return findGreatestProductOfAdjacentDigits$(inputPath, 13);
}

export function example008() {
  return findGreatestProductOfAdjacentDigits$(inputPath, 4);
}

function findGreatestProductOfAdjacentDigits$(path: string, digits: number) {
  return getInputDigitStream$(path).pipe(
    reduce(({ productQueue, productGreatest }, digit) => {
      const product = productQueue.nextFactor(digit);
      if (product > productGreatest) {
        productGreatest = product;
      }
      return { productQueue, productGreatest };
    }, { productQueue: new ProductQueue(digits), productGreatest: 0 }),
    map(({ productGreatest }) => productGreatest),
  );
}
