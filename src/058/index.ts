import { PrimeCache } from "../common/prime";

const primes = new PrimeCache();

const result = sideLengthWhereRatioDropsBelow10Percent();
console.log(result);

function sideLengthWhereRatioDropsBelow10Percent(): number {
  let diagonalTotal = 1;
  let diagonalPrimes = 0;

  let numberCounter = 1;
  let numberGap = 2;

  do {
    // every 4 diagonals has the same gap
    for (let i = 0; i < 4; i++) {
      numberCounter += numberGap;
      diagonalTotal++;
      if (primes.isPrime(numberCounter)) {
        diagonalPrimes++;
      }
    }

    // gap increases by 2 each loop
    numberGap += 2;
  } while (0.1 <= diagonalPrimes / diagonalTotal);

  // side length happens to be the sqrt of the corner number
  return Math.sqrt(numberCounter);
}
