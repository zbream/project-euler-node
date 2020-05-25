import { example003, main003 } from '.';

test('003', () => {
  const example = example003();
  expect(example).toBe(29);
  const result = main003();
  expect(result).toBe(6857);
});
