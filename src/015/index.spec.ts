import { example015, main015 } from '.';

test('015', () => {
  const example = example015();
  expect(example).toBe(6);
  const result = main015();
  expect(result).toBe(137846528820);
});
