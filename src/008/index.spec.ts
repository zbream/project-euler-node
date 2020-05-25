import { example008, main008 } from '.';

test('008', async () => {
  const example = await example008().toPromise();
  expect(example).toBe(5832);
  const result = await main008().toPromise();
  expect(result).toBe(23514624000);
});
