import { isPandigital } from "./pandigital";

export function main038() {
  return findMaxConcatenatedProductPandigital();
}

function findMaxConcatenatedProductPandigital() {
  let maxCPP = 0;
  const check = (m: number, n: number) => {
    let cps = "";
    for (let i = 1; i <= n; i++) {
      cps += m * i;
    }
    if (cps.length !== 9) {
      return;
    }
    const cp = +cps;
    if (isPandigital(cp) && cp > maxCPP) {
      maxCPP = cp;
    }
  };

  // No matter what, each m*n has AT LEAST as many digits as m.
  //
  // Since a pandigital number must be 9 digits long,
  // and we concatenate each m*n product,
  // the max of n is directly determined by the length of m.
  //
  // For instance, consider the smallest 3-digit number, 100.
  //  100*1=100, 100*2=200, 100*3=300, 100*4=400
  // If we concatenate these products, 100200300400 is too long.
  // Therefore, we know n<4 for a 3 digit m.

  for (let m = 1; m <= 9; m++) {
    for (let n = 1; n <= 9; n++) {
      check(m, n);
    }
  }
  for (let m = 10; m <= 99; m++) {
    for (let n = 1; n <= 4; n++) {
      check(m, n);
    }
  }
  for (let m = 100; m <= 999; m++) {
    for (let n = 1; n <= 3; n++) {
      check(m, n);
    }
  }
  for (let m = 1000; m <= 9999; m++) {
    for (let n = 1; n <= 2; n++) {
      check(m, n);
    }
  }
  return maxCPP;
}
