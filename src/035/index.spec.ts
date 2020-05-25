import { example035, main035 } from '.';

test('035', () => {
  const example = example035();
  expect(example).toBeTruthy();
  const result = main035();
  expect(result).toBe(55);
});
