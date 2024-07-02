import {
  digitPermutationId,
  factorial,
  memoizeDigitTransform,
} from '../common/util';

const factorials = memoizeDigitTransform(factorial);
function digitFactorialSum(n: number) {
  return `${n}`.split('').reduce((acc, cur) => acc + factorials[+cur], 0);
}

/**
 * Evaluator for determining length of digit factorial chains.
 * All seen values are cached for later evaluations.
 *
 * @see Problem14
 */
export class DigitFactorialChainEvaluator {
  private cache = new Map<string, number>();

  getLength(n: number) {
    const chain: string[] = [];
    let current = n;
    for (;;) {
      // Digit order doesn't affect the next term,
      // so normalize for better caching.
      const currentId = digitPermutationId(current);

      // Does this term have a known loop length?
      const cachedLoopLength = this.cache.get(currentId);
      if (cachedLoopLength !== undefined) {
        this.cacheChain(chain, chain.length, cachedLoopLength);
        return chain.length + cachedLoopLength;
      }

      // Have we seen this term before in the current chain?
      const foundLoopStart = chain.findIndex((v) => v === currentId);
      if (foundLoopStart > -1) {
        const loopLength = chain.length - foundLoopStart;
        this.cacheChain(chain, foundLoopStart, loopLength);
        return chain.length;
      }

      // Move along to the next term.
      chain.push(currentId);
      current = digitFactorialSum(current);
    }
  }

  private cacheChain(chain: string[], loopStart: number, loopLength: number) {
    // All terms after the start of the loop share the loop length.
    for (let i = loopStart; i < chain.length; i++) {
      this.cache.set(chain[i], loopLength);
    }
    // All terms before the loop have an increasing loop length.
    for (let i = 1; i <= loopStart; i++) {
      this.cache.set(chain[loopStart - i], loopLength + i);
    }
  }
}
