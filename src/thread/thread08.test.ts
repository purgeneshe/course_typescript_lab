import { expect, test } from 'vitest';
import { executeFunctionsSafely } from './thread08';

test('executeFunctionsSafely with mixed results', () => {
  const functions = [
    () => 1,
    () => { throw new Error('Test error'); },
    () => 'success'
  ];
  
  const results = executeFunctionsSafely(functions);
  
  expect(results).toEqual([
    { result: 1 },
    { error: 'Test error' },
    { result: 'success' }
  ]);
});