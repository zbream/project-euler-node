/**
 * Slide a window of a given length across the digits of a large number,
 * computing the product at each new digit.
 *
 * @example
 *
 * ```
 * 1234567890 over 5-digit window
 * ^^^^^      =   120
 *  ^^^^^     =   720
 *   ^^^^^    =  2520
 *    ^^^^^   =  6720
 *     ^^^^^  = 15120
 *      ^^^^^ =     0
 * ```
 */
export class ProductQueue {
  private readonly data: number[];
  private index = 0;

  constructor(length: number) {
    this.data = Array(length).fill(0);
  }

  next(factor: number): number {
    this.data[this.index] = factor;
    this.index = (this.index + 1) % this.data.length;
    return this.data.reduce((acc, cur) => acc * cur, 1);
  }
}
