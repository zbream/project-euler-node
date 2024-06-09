import { computeAlphabeticalValue } from './alphabetical-value';

describe('022-alphabetical-value', () => {
  it.each([
    ['A', 1],
    ['ABC', 6],
    ['ZACK', 41],
  ])(`should handle %s`, (name, expected) => {
    const result = computeAlphabeticalValue(name);
    expect(result).toBe(expected);
  });
});
