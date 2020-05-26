import { example029, main029 } from '.';

test('029', () => {
  const example = example029();
  expect(example).toBe(15);
  const result = main029();
  expect(result).toBe(9183);
});
