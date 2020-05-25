import { example036, main036 } from '.';

test('036', () => {
  const example = example036();
  expect(example).toBeTruthy();
  const result = main036();
  expect(result).toBe(872187);
});
