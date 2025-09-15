import { expect, test } from 'vitest';
import { validateUser, UserValidationError } from './thread07';

test('validateUser with valid user', () => {
  const user = { name: 'John', age: 25, email: 'john@test.com' };
  expect(() => validateUser(user)).not.toThrow();
});

test('validateUser with invalid name', () => {
  const user = { name: '', age: 25, email: 'john@test.com' };
  expect(() => validateUser(user)).toThrow(UserValidationError);
  expect(() => validateUser(user)).toThrow('Name is required');
});

test('validateUser with invalid age', () => {
  const user = { name: 'John', age: 16, email: 'john@test.com' };
  expect(() => validateUser(user)).toThrow('Age must be at least 18');
});

test('validateUser with invalid email', () => {
  const user = { name: 'John', age: 25, email: 'invalid-email' };
  expect(() => validateUser(user)).toThrow('Invalid email format');
});