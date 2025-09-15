import { expect, test } from 'vitest';
import { getArrayElement } from './thread03';

test('getArrayElement with valid index', () => {
  expect(getArrayElement([1, 2, 3], 1)).toBe(2);
});

test('getArrayElement with invalid index', () => {
  expect(getArrayElement([1, 2, 3], 10)).toBeUndefined();
});

