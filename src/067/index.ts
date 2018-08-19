import * as path from 'path';

import { getInputNumberTriangle } from '../018/input/input-number-triangle';
import { findMaxPathTotal } from '../018/number-triangle';

const FILE = 'input/input.txt';

const inputPath = path.join(__dirname, FILE);
const inputNumberTriangle = getInputNumberTriangle(inputPath);

const result = findMaxPathTotal(inputNumberTriangle);
console.log(result);
