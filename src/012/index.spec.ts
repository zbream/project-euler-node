import { example012, main012 } from '.';

test('012', () => {
  const example = example012();
  expect(example).toBe(28);
  const result = main012();
  expect(result).toBe(76576500);
});
