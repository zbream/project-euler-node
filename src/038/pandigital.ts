export function isPandigital(n: number): boolean {
  // Use bitfield to check if each digit is seen once.
  let b = 0b1111111110;
  while (n > 0) {
    const bd = 1 << n % 10;
    if (!(b & bd)) {
      return false;
    }
    b &= ~bd;
    n = (n / 10) | 0;
  }
  return !b;
}
