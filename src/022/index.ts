import * as path from 'path';
import { computeAlphabeticalValue } from './alphabetical-value';
import { readNames } from './names';

const FILE = 'input.txt';

const inputPath = path.join(__dirname, FILE);
const inputNames = readNames(inputPath).sort();

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


