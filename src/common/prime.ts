export class PrimeCache {
  private primes = new Map<number, boolean>();

  isPrime(num: number): boolean {
    let result = this.primes.get(num);
    if (result === undefined) {
      result = isPrime(num);
      this.primes.set(num, result);
    }
    return result;
  }
}

export function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    const max = Math.ceil(Math.sqrt(num));
    for (let i = 2; i <= max; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
