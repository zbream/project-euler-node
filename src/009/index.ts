export {};

const result = pythagoreanTripletWhereSumEquals(1000);
if (result) {
  const product = result[0] * result[1] * result[2];
  console.log(product);
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
