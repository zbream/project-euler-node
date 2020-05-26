import { example025, main025 } from '.';

test('025', () => {
  const example = example025();
  expect(example).toBe(12);
  const result = main025();
  expect(result).toBe(4782);
});
