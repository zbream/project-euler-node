export function isPalindrome(value: string | number) {
  const input = `${value}`

  const first = 0;
  const last = input.length - 1;
  const max = Math.floor(input.length / 2);

  for (let i = first; i <= max; i++) {
    if (input[i] !== input[last - i]) {
      return false;
    }
  }
  return true;
}
