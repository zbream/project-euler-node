import { example048, main048 } from '.';

test('048', () => {
  const example = example048();
  expect(example).toBe(10405071317n);
  const result = main048();
  expect(result).toBe('9110846700');
});
