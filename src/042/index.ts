import * as path from 'path';

import { computeAlphabeticalValue } from '../022/alphabetical-value';
import { PolygonalNumberUtil, TriangularNumberGenerator } from '../common/polygonal-number';
import { getInputWords } from './input/input-words';

const FILE = 'input/input.txt';

const inputPath = path.join(__dirname, FILE);
const inputWords = getInputWords(inputPath);

const triangularNumberUtil = new PolygonalNumberUtil(TriangularNumberGenerator());

const result = numTriangleWords(inputWords);
console.log(result);

function numTriangleWords(words: string[]): number {
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
