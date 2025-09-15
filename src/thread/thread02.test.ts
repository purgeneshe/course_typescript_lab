import { expect, test, vi } from 'vitest';
import { parseJsonSafely } from './thread02';

test('parseJsonSafely with valid JSON', () => {
  expect(parseJsonSafely('{"name": "John"}')).toEqual({ name: 'John' });
});

test('parseJsonSafely with invalid JSON', () => {
  const consoleSpy = vi.spyOn(console, 'error');
  expect(parseJsonSafely('invalid json')).toBeNull();
  expect(consoleSpy).toHaveBeenCalled();
});
