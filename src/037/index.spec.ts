import { example037, main037 } from '.';

test('037', () => {
  const example = example037();
  expect(example).toBeTruthy();
  const result = main037();
  expect(result).toBe(748317);
});
