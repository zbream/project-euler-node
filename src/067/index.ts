import * as path from 'path';

import { readFromFile, findMaxPathTotal } from '../018/number-triangle';

const FILE = 'input.txt';

const inputPath = path.join(__dirname, FILE);
const result = findMaxPathTotal(readFromFile(inputPath));
console.log(result);
