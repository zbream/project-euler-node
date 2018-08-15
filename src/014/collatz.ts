export function* CollatzGenerator(term: number) {
  while (term > 1) {
    yield term;
    if (term % 2 === 0) {
      // even
      term = Math.floor(term / 2);
    } else {
      // odd
      term = (3 * term + 1);
    }
  }
  // yield the final 1
  yield term;
}

export function getCollatzChainLength(start: number) {
  let terms = 0;
  for (const _ of CollatzGenerator(start)) {
    terms++;
  }
  return terms;
}
