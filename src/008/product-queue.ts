export class ProductQueue {

  private readonly data: number[];
  private readonly dataLength: number;
  private nextIndex = 0;

  constructor(length: number) {
    this.data = [];
    this.data.fill(0, 0, length);
    this.dataLength = length;
  }

  nextFactor(factor: number): number {
    this.data[this.nextIndex] = factor;
    this.incNextIndex();
    return this.getProduct();
  }

  private incNextIndex() {
    this.nextIndex = (this.nextIndex + 1) % this.dataLength;
  }

  private getProduct() {
    let result = 1;
    for (let i = 0; i < this.dataLength; i++) {
      result *= this.data[i];
    }
    return result;
  }

}
