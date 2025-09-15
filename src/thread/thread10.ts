/* 
	Реализовать функцию XXX
*/

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
  // Ваш код здесь (10-12 строк)
  // Проверить name (не пустой)
  // Проверить age (>= 0)
  // Проверить address.street (не пустой)
  // Проверить address.city (не пустой)
  // Для ошибок указать путь в path
}
