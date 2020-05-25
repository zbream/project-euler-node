import { example006, main006 } from '.';

test('006', () => {
  const example = example006();
  expect(example).toBe(2640);
  const result = main006();
  expect(result).toBe(25164150);
});
