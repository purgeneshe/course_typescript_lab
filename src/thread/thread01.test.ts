import { expect, test } from 'vitest';
import { safeDivide } from './thread01';


test('safeDivide with normal division', () => {
  expect(safeDivide(10, 2)).toBe(5);
});

test('safeDivide with zero division', () => {
  expect(safeDivide(10, 0)).toBeNull();
});