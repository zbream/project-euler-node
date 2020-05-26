interface FibonacciGeneratorInit<T> {
  f0: T;
  f1: T;
}

export function FibonacciGenerator({ f0, f1 }: FibonacciGeneratorInit<number>): Generator<number, void, unknown>;
export function FibonacciGenerator({ f0, f1 }: FibonacciGeneratorInit<bigint>): Generator<bigint, void, unknown>;
export function* FibonacciGenerator({ f0, f1 }: FibonacciGeneratorInit<number> | FibonacciGeneratorInit<bigint>) {
  let curr = f0;
  let next = f1;

  while (true) {
    yield curr;
    // TypeScript can't interpret the difference between number `+` and bigint `+`.
    [curr, next] = [next, (curr as any) + (next as any)];
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
