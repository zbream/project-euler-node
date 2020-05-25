export function main028() {
  return sumOfDiagonals(1001);
}

export function example028() {
  return sumOfDiagonals(5);
}

function sumOfDiagonals(rowCount: number): number {
  let sum = 1;

  let numberCounter = 1;
  let numberGap = 2;

  // each top-right diagonal is the square of the number of rows
  const finalNumber = rowCount * rowCount;
  while (numberCounter < finalNumber) {
    // every 4 diagonals has the same gap
    for (let i = 0; i < 4; i++) {
      numberCounter += numberGap;
      sum += numberCounter;
    }

    // gap increases by 2 each loop
    numberGap += 2;
  }

  return sum;
}
