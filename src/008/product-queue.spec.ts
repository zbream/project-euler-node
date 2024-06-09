import { ProductQueue } from './product-queue';

describe('008-product-queue', () => {
  it('should compute successive products', () => {
    const queue = new ProductQueue(5);
    expect(queue.next(1)).toBe(0);
    expect(queue.next(2)).toBe(0);
    expect(queue.next(3)).toBe(0);
    expect(queue.next(4)).toBe(0);
    expect(queue.next(5)).toBe(120);
    expect(queue.next(6)).toBe(720);
    expect(queue.next(7)).toBe(2520);
    expect(queue.next(8)).toBe(6720);
    expect(queue.next(9)).toBe(15120);
    expect(queue.next(0)).toBe(0);
  });
});
