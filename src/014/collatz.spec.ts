import { CollatzChainEvaluator, CollatzGenerator } from './collatz';

describe('014-collatz', () => {
  describe('generator', () => {
    it('should generate the base case', () => {
      const result = [...CollatzGenerator(1)];
      expect(result).toEqual([1]);
    });

    it('should generate longer sequence', () => {
      const result = [...CollatzGenerator(13)];
      expect(result).toEqual([13, 40, 20, 10, 5, 16, 8, 4, 2, 1]);
    });
  });

  describe('evaluator', () => {
    let evaluator: CollatzChainEvaluator;
    beforeEach(() => {
      evaluator = new CollatzChainEvaluator();
    });

    it('should handle the base case', () => {
      expect(evaluator.getLength(1)).toBe(1);
    });

    it('should handle a chain with no cache', () => {
      expect(evaluator.getLength(16)).toBe(5);
    });

    it('should handle a chain with full cache', () => {
      expect(evaluator.getLength(16)).toBe(5);
      expect(evaluator.getLength(4)).toBe(3);
    });

    it('should handle a chain with partial cache', () => {
      expect(evaluator.getLength(4)).toBe(3);
      expect(evaluator.getLength(16)).toBe(5);
    });
  });
});
