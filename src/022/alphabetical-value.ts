export function computeAlphabeticalValue(name: string): number {
  return [...name]
    .reduce((sum: number, char: string) => {
      const charValue = (char.charCodeAt(0) - 65) + 1;
      return sum + charValue;
    }, 0);
}
