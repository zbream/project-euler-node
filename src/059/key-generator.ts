// KEYS FROM aaa TO zzz
export function* KeyGenerator() {
  for (let i = 0; i < 17576; i++) {
    yield [
      Math.floor(i / 676) % 26 + 97,
      Math.floor(i / 26) % 26 + 97,
      Math.floor(i / 1) % 26 + 97,
    ];
  }
}
