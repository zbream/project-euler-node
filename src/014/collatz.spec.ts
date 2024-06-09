import { CollatzGenerator, getCollatzChainLength } from './collatz';

describe('014-collatz', () => {
  it('should generate the base case', () => {
    const result = [...CollatzGenerator(1)];
    expect(result).toEqual([1]);
  });
  it('should generate longer sequence', () => {
    const result = [...CollatzGenerator(13)];
    expect(result).toEqual([13, 40, 20, 10, 5, 16, 8, 4, 2, 1]);
  });

  it('should count longer sequence length', () => {
    const result = getCollatzChainLength(13);
    expect(result).toBe(10);
  });
});
