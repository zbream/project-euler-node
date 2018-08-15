export function* FibonacciGenerator({ f0, f1 }: { f0: number, f1: number } = { f0: 0, f1: 1 }) {
  let curr = f0;
  let next = f1;

  while (true) {
    yield curr;
    [curr, next] = [next, curr + next];
  }
}

export function FibonacciTerm(term: number): number {
  switch (term) {
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      return FibonacciTerm(term - 1) + FibonacciTerm(term - 2);
  }
}
