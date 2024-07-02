import { digitPermutationId, memoizeDigitTransform } from '../common/util';

const digitSquared = memoizeDigitTransform((digit) => digit * digit);

export function* SquareDigitSumGenerator(num: number) {
  yield num;
  while (num !== 1 && num !== 89) {
    num = computeSquareDigitSum(num);
    yield num;
  }
}

function computeSquareDigitSum(num: number): number {
  let sum = 0;
  while (num > 0) {
    sum += digitSquared[num % 10];
    num = Math.floor(num / 10);
  }
  return sum;
}

/**
 * Evaluator for determining the final term of square-digit-sum chains.
 * All seen values are cached for later evaluations.
 *
 * @see Problem14
 */
export class SquareDigitSumChainEvaluator {
  private cache = new Map<string, string>();

  getFinal(n: number) {
    const chain: string[] = [];
    for (const term of SquareDigitSumGenerator(n)) {
      // Digit order doesn't affect the next term,
      // so normalize for better caching.
      const id = digitPermutationId(term);

      // Does this term have a known final?
      const cachedFinal = this.cache.get(id);
      if (cachedFinal !== undefined) {
        this.cacheChain(chain, cachedFinal);
        return cachedFinal;
      }

      // Move along to the next term.
      chain.push(id);
    }
    const final = chain[chain.length - 1];
    this.cacheChain(chain, final);
    return final;
  }

  private cacheChain(chain: string[], final: string) {
    for (const num of chain) {
      this.cache.set(num, final);
    }
  }
}
