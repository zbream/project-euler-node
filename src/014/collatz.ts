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
 * Find the length of a Collatz sequence, starting with the given value.
 *
 * Memory-safe, does not store the entire sequence in memory.
 *
 * @param start starting value
 * @returns length
 */
export function getCollatzChainLength(start: number) {
  let terms = 0;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const _ of CollatzGenerator(start)) {
    terms++;
  }
  return terms;
}
