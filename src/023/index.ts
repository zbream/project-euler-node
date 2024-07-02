import { getFactors } from '../common/factor';

export function main023() {
  return sumOfAllNonAbundantUpTo(28123);
}

function sumOfAllNonAbundantUpTo(upperLimit: number) {
  const evaluator = new AbundantEvaluator();
  let sum = 0;
  for (let i = 1; i <= upperLimit; i++) {
    if (!evaluator.isSumOfAbundant(i)) {
      sum += i;
    }
  }
  return sum;
}

/**
 * Evaluator for determining whether values are abundant.
 * All seen values are cached for later evaluations.
 */
class AbundantEvaluator {
  private cache = new Map<number, boolean>();

  isSumOfAbundant(num: number) {
    const maxAddend = Math.floor(num / 2);
    for (let addend = 0; addend <= maxAddend; addend++) {
      if (this.isAbundant(addend) && this.isAbundant(num - addend)) {
        return true;
      }
    }
    return false;
  }

  isAbundant(num: number) {
    if (num < 12) {
      return false;
    }
    const cached = this.cache.get(num);
    if (cached !== undefined) {
      return cached;
    }
    const result = this.computeIsAbundant(num);
    this.cache.set(num, result);
    return result;
  }

  private computeIsAbundant(num: number) {
    const divisorSum =
      getFactors(num).reduce((sum, value) => sum + value, 0) - num;
    return divisorSum > num;
  }
}
