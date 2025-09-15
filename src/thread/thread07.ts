/* 
	Допишите функцию валидации пользователя, которая проверяет несколько условий и бросает разные ошибки для разных случаев.
*/

export class UserValidationError extends Error {
  constructor(message: string, public field?: string) {
    super(message);
    this.name = 'UserValidationError';
  }
}

export interface User {
  name: string;
  age: number;
  email: string;
}

export function validateUser(user: User): void {
  // Ваш код здесь (8-10 строк)
  // 1. Проверить, что имя не пустое
  // 2. Проверить, что возраст >= 18
  // 3. Проверить, что email содержит '@'
  // Для каждой ошибки бросать UserValidationError с указанием поля
}
