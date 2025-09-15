import { expect, test } from 'vitest';
import { validatePerson, NestedValidationError } from './thread10';

test('validatePerson with valid data', () => {
  const person = {
    name: 'John',
    age: 25,
    address: { street: 'Main St', city: 'New York' }
  };
  expect(() => validatePerson(person)).not.toThrow();
});

test('validatePerson with nested error', () => {
  const person = {
    name: 'John',
    age: 25,
    address: { street: '', city: 'New York' }
  };
  
  expect(() => validatePerson(person)).toThrow(NestedValidationError);
  
  try {
    validatePerson(person);
  } catch (error) {
    expect(error.path).toEqual(['address', 'street']);
    expect(error.message).toBe('Street is required');
  }
});