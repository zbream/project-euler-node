import * as path from 'path';

import { computeAlphabeticalValue } from '../022/alphabetical-value';
import { PolygonalNumberUtil, TriangularNumberGenerator } from '../common/polygonal-number';
import { readWords } from './words';

const FILE = 'input.txt';

const inputPath = path.join(__dirname, FILE);
const inputWords = readWords(inputPath);

const triangularNumberUtil = new PolygonalNumberUtil(TriangularNumberGenerator());

const result = countTriangleWords(inputWords);
console.log(result);

function countTriangleWords(words: string[]): number {
  let count = 0;
  for (const word of words) {
    if (isTriangleWord(word)) {
      count++;
    }
  }
  return count;
}

function isTriangleWord(word: string): boolean {
  const wordValue = computeAlphabeticalValue(word);
  return triangularNumberUtil.isNumber(wordValue);
}
