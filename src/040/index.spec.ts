import { example040, main040 } from '.';

test('040', () => {
  const example = example040();
  expect(example).toBe(1);
  const result = main040();
  expect(result).toBe(210);
});
