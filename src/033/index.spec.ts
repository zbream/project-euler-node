import { example033, main033 } from '.';

test('033', () => {
  const example = example033();
  expect(example).toBeTruthy();
  const result = main033();
  expect(result).toBe(100);
});
