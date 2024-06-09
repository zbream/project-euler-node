/**
 * Calculate the alphabetical value for a string, where
 * each character's value (A=1 to Z=26) is added together.
 *
 * All letters must be uppercase.
 *
 * @param name string to calcualte
 * @returns alphabetical value
 */
export function computeAlphabeticalValue(name: string): number {
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i) - 65 + 1;
  }
  return sum;
}
