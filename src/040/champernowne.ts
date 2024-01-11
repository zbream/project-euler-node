export function* ChampernowneGenerator(): Generator<number, never, void> {
  const stack: number[] = [];
  let nextInt = 1;

  while (true) {
    // prepare digit stack
    let n = nextInt++;
    while (n > 0) {
      stack.push(n % 10);
      n = Math.floor(n / 10);
    }
    // pop until we run out
    let current: number | undefined;
    while ((current = stack.pop()) !== undefined) {
      yield current;
    }
  }
}

export class ChampernowneTermUtil {
  private generator = ChampernowneGenerator();
  private nextTerm = 1;

  getTerm(term: number): number {
    if (term < this.nextTerm) {
      throw new Error('Term out of range.');
    } else {
      while (this.nextTerm < term) {
        this.getNextTerm();
      }
      return this.getNextTerm();
    }
  }

  private getNextTerm(): number {
    this.nextTerm++;
    return this.generator.next().value;
  }

}
