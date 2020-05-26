import { getGreatestCommonDivisor } from '../common/factor';

export function main033() {
  const curious = findCurious();
  // Compute product and reduce.
  const product = curious.reduce(([nProduct, dProduct], [n, d]) => ([nProduct * n, dProduct * d]), [1, 1]);
  const gcd = getGreatestCommonDivisor(product[0], product[1]);
  // Return reduced denominator.
  return product[1] / gcd;
}

export function example033() {
  return isCurious(49, 98);
}

function findCurious() {
  const curious: Array<[number, number]> = [];
  for (let numerator = 10; numerator <= 99; numerator++) {
    for (let denominator = numerator + 1; denominator <= 99; denominator++) {
      const trivial = (numerator % 10 === 0 && denominator % 10 === 0);
      if (trivial) {
        continue;
      }
      if (isCurious(numerator, denominator)) {
        curious.push([numerator, denominator]);
      }
    }
  }
  return curious;
}

function isCurious(numerator: number, denominator: number) {
  const numeratorArray = splitNumber(numerator);
  const denominatorArray = splitNumber(denominator);
  const value = numerator / denominator;

  for (let numeratorIndex = 0; numeratorIndex < 2; numeratorIndex++) {
    // See if we have a pair.
    const numeratorDigit = numeratorArray[numeratorIndex];
    const denominatorIndex = denominatorArray.findIndex(denominatorDigit => denominatorDigit === numeratorDigit);
    if (denominatorIndex === -1) {
      continue;
    }
    // We do! Try with these digits removed
    const newNumerator = numeratorArray[(numeratorIndex + 1) % 2];
    const newDenominator = denominatorArray[(denominatorIndex + 1) % 2];
    const testValue = newNumerator / newDenominator;
    if (testValue === value) {
      return true;
    }
  }

  return false;
}

function splitNumber(num: number) {
  return num.toString().split('').map(char => +char);
}
