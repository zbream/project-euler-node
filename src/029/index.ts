export function main029() {
  return numDistinctTermsInRange(2, 100);
}

export function example029() {
  return numDistinctTermsInRange(2, 5);
}

function numDistinctTermsInRange(min: number, max: number) {
  const terms = distinctTermsInRange(min, max);
  return terms.size;
}

function distinctTermsInRange(min: number, max: number) {
  const terms = new Set<number>();
  for (let a = min; a <= max; a++) {
    for (let b = min; b <= max; b++) {
      const term = a ** b;
      terms.add(term);
    }
  }
  return terms;
}
