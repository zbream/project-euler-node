import { example021, main021 } from '.';

test('021', () => {
  const example = example021();
  expect(example).toBeTruthy();
  const result = main021();
  expect(result).toBe(31626);
});
