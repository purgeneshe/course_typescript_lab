import { expect, test, vi } from 'vitest';
import { fetchWithFallback } from './thread04';

// Мокировать fetch для тестов
global.fetch = vi.fn();

test('fetchWithFallback success', async () => {
  (fetch as any).mockResolvedValueOnce({ 
    text: () => Promise.resolve('success') 
  });
  await expect(fetchWithFallback('http://test.com')).resolves.toBe('success');
});

test('fetchWithFallback error', async () => {
  (fetch as any).mockRejectedValueOnce(new Error('Network error'));
  await expect(fetchWithFallback('http://test.com')).resolves.toContain('Error');
});

