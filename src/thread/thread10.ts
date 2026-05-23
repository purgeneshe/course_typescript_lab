export class NestedValidationError extends Error {
  constructor(message: string, public path: string[]) {
    super(message);
    this.name = 'NestedValidationError';
  }
}

export interface Address {
  street: string;
  city: string;
}

export interface Person {
  name: string;
  age: number;
  address: Address;
}

export function validatePerson(person: Person): void {
  // Проверяем имя
  if (!person.name || person.name.trim() === '') {
    throw new NestedValidationError('Name is required', ['name']);
  }

  // Проверяем возраст
  if (person.age < 0) {
    throw new NestedValidationError('Age must be non-negative', ['age']);
  }

  // Проверяем улицу
  if (!person.address.street || person.address.street.trim() === '') {
    throw new NestedValidationError('Street is required', ['address', 'street']);
  }

  // Проверяем город
  if (!person.address.city || person.address.city.trim() === '') {
    throw new NestedValidationError('City is required', ['address', 'city']);
  }
}
