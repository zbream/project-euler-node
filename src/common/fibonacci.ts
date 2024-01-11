export function FibonacciGenerator(f0: number, f1: number): Generator<number, void, unknown>;
export function FibonacciGenerator(f0: bigint, f1: bigint): Generator<bigint, void, unknown>;
export function* FibonacciGenerator(f0: number | bigint, f1: number | bigint) {
  let curr = f0;
  let next = f1;

  while (true) {
    yield curr;
    // https://github.com/microsoft/TypeScript/issues/27808#issuecomment-1849690510
    [curr, next] = [next, (curr as number) + (next as number)];
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
