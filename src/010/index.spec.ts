import { example010, main010 } from '.';

test('010', () => {
  const example = example010();
  expect(example).toBe(17);
  const result = main010();
  expect(result).toBe(142913828922);
});
