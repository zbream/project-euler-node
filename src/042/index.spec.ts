import { example042, main042 } from '.';

test('042', () => {
  const example = example042();
  expect(example).toBeTruthy();
  const result = main042();
  expect(result).toBe(162);
});
