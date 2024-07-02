import {
  SquareDigitSumChainEvaluator,
  SquareDigitSumGenerator,
} from './square-digit-sum';

describe('092-square-digit-sum', () => {
  describe('generator', () => {
    it('should generate the base case', () => {
      const result1 = [...SquareDigitSumGenerator(1)];
      expect(result1).toEqual([1]);
      const result89 = [...SquareDigitSumGenerator(89)];
      expect(result89).toEqual([89]);
    });

    it('should generate longer sequence', () => {
      const result = [...SquareDigitSumGenerator(44)];
      expect(result).toEqual([44, 32, 13, 10, 1]);
    });
  });

  describe('evaluator', () => {
    let evaluator: SquareDigitSumChainEvaluator;
    beforeEach(() => {
      evaluator = new SquareDigitSumChainEvaluator();
    });

    it('should handle the base case', () => {
      expect(evaluator.getFinal(1)).toBe('1');
      expect(evaluator.getFinal(89)).toBe('89');
    });

    it('should handle a chain with no cache', () => {
      expect(evaluator.getFinal(44)).toBe('1');
    });

    it('should handle a chain with full cache', () => {
      expect(evaluator.getFinal(44)).toBe('1');
      expect(evaluator.getFinal(13)).toBe('1');
    });

    it('should handle a chain with partial cache', () => {
      expect(evaluator.getFinal(13)).toBe('1');
      expect(evaluator.getFinal(44)).toBe('1');
    });
  });
});
