import { example007, main007 } from '.';

test('007', () => {
  const example = example007();
  expect(example).toBe(13);
  const result = main007();
  expect(result).toBe(104743);
});
