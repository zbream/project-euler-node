import * as path from 'path';

import { computeAlphabeticalValue } from './alphabetical-value';
import { getInputNames } from './input/input-names';

const FILE = 'input/input.txt';

const inputPath = path.join(__dirname, FILE);
const inputNames = getInputNames(inputPath).sort();

const result = computeTotalNameScores(inputNames);
console.log(result);

function computeTotalNameScores(names: string[]): number {
  return names
    .reduce((sum: number, name: string, nameIndex: number) => {
      const alphabeticalValue = computeAlphabeticalValue(name);
      const alphabeticalPosition = nameIndex + 1;
      return sum + (alphabeticalValue * alphabeticalPosition);
    }, 0);
}
