import { example004, main004 } from '.';

test('004', () => {
  const example = example004();
  expect(example).toBe(9009);
  const result = main004();
  expect(result).toBe(906609);
});
