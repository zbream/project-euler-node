export function main048() {
  return computeSeriesLastTenDigits(1000);
}

export function example048() {
  return computeSeries(10);
}

export function computeSeriesLastTenDigits(max: number) {
  return computeSeries(max).toString().slice(-10);
}

export function computeSeries(max: number) {
  let sum = 0n;
  for (let i = 1n; i <= max; i++) {
    sum += (i ** i);
  }
  return sum;
}
