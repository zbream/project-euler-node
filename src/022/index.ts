import { join } from 'path';

import { computeAlphabeticalValue } from './alphabetical-value';
import { getInputNames } from './input/input-names';

export function main022() {
  const inputPath = join(__dirname, 'input/input.txt');
  const inputNames = getInputNames(inputPath).sort();
  return computeTotalNameScores(inputNames);
}

function computeTotalNameScores(names: string[]): number {
  return names
    .reduce((sum: number, name: string, nameIndex: number) => {
      const alphabeticalValue = computeAlphabeticalValue(name);
      const alphabeticalPosition = nameIndex + 1;
      return sum + (alphabeticalValue * alphabeticalPosition);
    }, 0);
}
