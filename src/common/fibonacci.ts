export class FibonacciSequencer {

  private prev: number;
  private next: number;

  constructor({ f0, f1 }: { f0: number, f1: number } = { f0: 0, f1: 1 }) {
    this.next = f0;
    this.prev = f1 - f0;
  }

  getNext(): number {
    const result = this.next;

    const newNext = this.next + this.prev;
    this.prev = this.next;
    this.next = newNext;

    return result;
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
