export function main029() {
  return numDistinctTermsInRange(2, 100);
}

export function example029() {
  return numDistinctTermsInRange(2, 5);
}

function numDistinctTermsInRange(min: number, max: number) {
  const terms = distinctTermsInRange(min, max);
  return Object.keys(terms).length;
}

function distinctTermsInRange(min: number, max: number) {
  const terms: { [key: number]: true } = {};
  for (let a = min; a <= max; a++) {
    for (let b = min; b <= max; b++) {
      const term = a ** b;
      terms[term] = true;
    }
  }
  return terms;
}
