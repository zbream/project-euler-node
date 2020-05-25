import { join } from 'path';

import { computeAlphabeticalValue } from '../022/alphabetical-value';
import { PolygonalNumberUtil, TriangularNumberGenerator } from '../common/polygonal-number';
import { getInputWords } from './input/input-words';

export function main042() {
  const inputPath = join(__dirname, 'input/input.txt');
  const inputWords = getInputWords(inputPath);
  const triangleNumbers = new PolygonalNumberUtil(TriangularNumberGenerator());
  return numTriangleWords(triangleNumbers, inputWords);
}

export function example042() {
  const triangleNumbers = new PolygonalNumberUtil(TriangularNumberGenerator());
  return isTriangleWord(triangleNumbers, 'SKY');
}

function numTriangleWords(triangleNumbers: PolygonalNumberUtil, words: string[]): number {
  let count = 0;
  for (const word of words) {
    if (isTriangleWord(triangleNumbers, word)) {
      count++;
    }
  }
  return count;
}

function isTriangleWord(triangleNumbers: PolygonalNumberUtil, word: string): boolean {
  const wordValue = computeAlphabeticalValue(word);
  return triangleNumbers.isNumber(wordValue);
}
