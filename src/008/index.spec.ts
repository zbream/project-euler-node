import { example008, main008 } from '.';

test('008', async () => {
  const example = await example008();
  expect(example).toBe(5832);
  const result = await main008();
  expect(result).toBe(23514624000);
});
