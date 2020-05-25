import { example005, main005 } from '.';

test('005', () => {
  const example = example005();
  expect(example).toBe(2520);
  const result = main005();
  expect(result).toBe(232792560);
});
