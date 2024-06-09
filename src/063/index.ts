export function main063() {
  let count = 0;

  // choose a reasonable limit, matches seem to stop at p=21
  for (let p = 1n; p <= 30n; p++) {
    // 10^(p-1) <= b^p < 10^p
    const min = 10n ** (p - 1n);
    const max = 10n ** p;
    for (let b = 1n; ; b++) {
      const res = b ** p;
      if (res >= min) {
        if (res < max) {
          count++;
          // console.log(`${b} ^ ${p} = ${res} | ${count}`);
        } else {
          break;
        }
      }
    }
  }
  return count;
}
