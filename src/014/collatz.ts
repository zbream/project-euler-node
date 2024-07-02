/**
 * Generate the terms of the Collatz sequence, starting with the given value.
 *
 * Memory-safe, does not store the entire sequence in memory.
 *
 * @param term starting value
 */
export function* CollatzGenerator(term: number) {
  yield term;
  while (term > 1) {
    if (term % 2 === 0) {
      // even
      term = Math.floor(term / 2);
    } else {
      // odd
      term = 3 * term + 1;
    }
    yield term;
  }
}

/**
 * Evaluator for determining length of collatz chains.
 * All seen values are cached for later evaluations.
 */
export class CollatzChainEvaluator {
  private cache = new Map<number, number>();

  getLength(start: number) {
    const chain: number[] = [];
    for (const term of CollatzGenerator(start)) {
      // Does this term have a known chain length?
      const cachedLength = this.cache.get(term);
      if (cachedLength !== undefined) {
        this.cacheChain(chain, cachedLength);
        return chain.length + cachedLength;
      }

      // Move along to the next term.
      chain.push(term);
    }
    this.cacheChain(chain, 0);
    return chain.length;
  }

  private cacheChain(chain: number[], remainingLength: number) {
    for (let i = 1; i <= chain.length; i++) {
      this.cache.set(chain[chain.length - i], i + remainingLength);
    }
  }
}
