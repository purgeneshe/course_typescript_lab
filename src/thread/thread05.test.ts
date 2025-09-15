import { expect, test } from 'vitest';
import { createValidDate } from './thread05';

test('createValidDate with valid date', () => {
  expect(createValidDate('2023-01-01')).toBeInstanceOf(Date);
});

test('createValidDate with invalid date', () => {
  expect(() => createValidDate('invalid-date')).toThrow('Invalid date format');
});