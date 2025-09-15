import { expect, test, vi } from 'vitest';
import { withRetry } from './thread09';

test('withRetry succeeds on first attempt', async () => {
  const mockOperation = vi.fn().mockResolvedValue('success');
  await expect(withRetry(mockOperation)).resolves.toBe('success');
  expect(mockOperation).toHaveBeenCalledTimes(1);
});

test('withRetry succeeds on second attempt', async () => {
  const mockOperation = vi.fn()
    .mockRejectedValueOnce(new Error('First fail'))
    .mockResolvedValueOnce('success');
  
  await expect(withRetry(mockOperation, 2)).resolves.toBe('success');
  expect(mockOperation).toHaveBeenCalledTimes(2);
});

test('withRetry fails after all attempts', async () => {
  const mockOperation = vi.fn().mockRejectedValue(new Error('Always fails'));
  await expect(withRetry(mockOperation, 2)).rejects.toThrow('Always fails');
  expect(mockOperation).toHaveBeenCalledTimes(2);
});