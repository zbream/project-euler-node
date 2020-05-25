import { join } from 'path';

import { getInputNumberTriangle } from '../018/input/input-number-triangle';
import { findMaxPathTotal } from '../018/number-triangle';

export function main067() {
  const inputPath = join(__dirname, 'input/input.txt');
  const inputNumberTriangle = getInputNumberTriangle(inputPath);
  return findMaxPathTotal(inputNumberTriangle);
}
