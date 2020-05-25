export function main009() {
  const triplet = pythagoreanTripletWhereSumEquals(1000);
  if (triplet) {
    return triplet[0] * triplet[1] * triplet[2];
  }
}

function pythagoreanTripletWhereSumEquals(num: number): [number, number, number] | undefined {
  for (let a = 1; a < num; a++) {
    for (let b = 1; b < num - a; b++) {
      const c = Math.sqrt((a * a) + (b * b));
      if (c !== Math.trunc(c)) {
        continue;
      }
      if ((a + b + c === num) && (b !== c)) {
        return [a, b, c];
      }
    }
  }
  return undefined;
}
