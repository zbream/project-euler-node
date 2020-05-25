import { example034, main034 } from '.';

test('034', () => {
  const example = example034();
  expect(example).toBeTruthy();
  const result = main034();
  expect(result).toBe(40730);
});
