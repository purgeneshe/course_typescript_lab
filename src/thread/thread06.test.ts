import { expect, test } from 'vitest';
import { validateUserAge, ValidationError } from './thread06';

test('validateUserAge with valid age', () => {
  expect(() => validateUserAge(20)).not.toThrow();
});

test('validateUserAge with invalid age', () => {
  expect(() => validateUserAge(16)).toThrow(ValidationError);
  expect(() => validateUserAge(16)).toThrow('Age must be at least 18');
});

test('validateUserAge should have correct field property', () => {
  try {
    validateUserAge(16);
    expect.fail('Should have thrown an error');
  } catch (error) {
    expect(error).toBeInstanceOf(ValidationError);
    expect((error as ValidationError).field).toBe('age');
    expect(error.message).toBe('Age must be at least 18');
  }
});
