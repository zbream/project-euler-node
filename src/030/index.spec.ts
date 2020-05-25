import { example030, main030 } from '.';

test('030', () => {
  const example = example030();
  expect(example).toBe(19316);
  const result = main030();
  expect(result).toBe(443839);
});
