// treat file as module
export {};

const result = sumOfMultiplesOf3And5Below(1000);
console.log(result);

function sumOfMultiplesOf3And5Below(upperLimit: number) {
  let sum = 0;
  for (let i = 0; i < upperLimit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
