import * as path from 'path';

import { getInputNumberTriangle } from './input/input-number-triangle';
import { findMaxPathTotal } from './number-triangle';

const FILE = 'input/input.txt';

const inputPath = path.join(__dirname, FILE);
const inputNumberTriangle = getInputNumberTriangle(inputPath);

const result = findMaxPathTotal(inputNumberTriangle);
console.log(result);
