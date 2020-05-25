import { join } from 'path';

import { getInputNumberTriangle } from './input/input-number-triangle';
import { findMaxPathTotal } from './number-triangle';

export function main018() {
  const inputPath = join(__dirname, 'input/input.txt');
  const inputNumberTriangle = getInputNumberTriangle(inputPath);
  return findMaxPathTotal(inputNumberTriangle);
}
