export function main056() {
  return getMaxDigitalSum(100);
}

export function example056() {
  return getDigitalSum(100n ** 100n);
}

function getMaxDigitalSum(upperLimit: number) {
  let maxDigitalSum = 0;
  for (let a = 0; a < upperLimit; a++) {
    for (let b = 0; b < upperLimit; b++) {
      const digitalSum = getDigitalSum(BigInt(a) ** BigInt(b));
      if (digitalSum > maxDigitalSum) {
        maxDigitalSum = digitalSum;
      }
    }
  }
  return maxDigitalSum;
}

function getDigitalSum(num: bigint) {
  return num
    .toString()
    .split('')
    .reduce((sum, curr) => sum += +curr, 0);
}
