import { example028, main028 } from '.';

test('028', () => {
  const example = example028();
  expect(example).toBe(101);
  const result = main028();
  expect(result).toBe(669171001);
});
