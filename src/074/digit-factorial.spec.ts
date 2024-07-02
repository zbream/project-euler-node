import { DigitFactorialChainEvaluator } from './digit-factorial';

describe('074-digit-factorial', () => {
  describe('evaluator', () => {
    let evaluator: DigitFactorialChainEvaluator;
    beforeEach(() => {
      evaluator = new DigitFactorialChainEvaluator();
    });

    it('should handle a chain with no cache', () => {
      expect(evaluator.getLength(69)).toBe(5);
    });

    it('should handle a chain with full cache', () => {
      expect(evaluator.getLength(69)).toBe(5);
      expect(evaluator.getLength(1454)).toBe(3);
    });

    it('should handle a chain with partial cache', () => {
      expect(evaluator.getLength(1454)).toBe(3);
      expect(evaluator.getLength(69)).toBe(5);
    });
  });
});
