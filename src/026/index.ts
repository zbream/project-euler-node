export function main026() {
  return getLongestRecurringCycleBelow(1000);
}

function example() {
  for (let i = 2; i <= 10; i++) {
    const { result, period } = getRecurringCycle(i);
    const strPeriod = period ? ` : ${period}` : ``;
    const str = `1/${i} : ${result}${strPeriod}`;
    console.log(str);
  }
}

function getLongestRecurringCycleBelow(upperD: number) {
  let highestD = 0;
  let highestPeriod = 0;
  for (let d = 2; d < upperD; d++) {
    const { period } = getRecurringCycle(d);
    if (period !== undefined && period > highestPeriod) {
      highestD = d;
      highestPeriod = period;
    }
  }
  return highestD;
}

function getRecurringCycle(d: number): { result: string, period?: number } {
  const foundRemainders: number[] = [];
  let result = '0.';
  let remainder = 1;
  for (let i = 0; i < d; i++) {
    // if remainder is 0, we've completed the result
    if (remainder === 0) {
      break;
    }
    // if we've seen this remainder, we just started a repeat
    const foundIndex = foundRemainders.findIndex(fr => fr === remainder);
    if (foundIndex > -1) {
      const period = foundRemainders.length - foundIndex;
      return { result, period };
    }
    // add the remainder and move on
    foundRemainders.push(remainder);
    remainder *= 10;
    result += Math.floor(remainder / d);
    remainder %= d;
  }
  return { result };
}
