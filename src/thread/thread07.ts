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
  // Проверяем имя
  if (!user.name || user.name.trim() === '') {
    throw new UserValidationError('Name is required', 'name');
  }

  // Проверяем возраст
  if (user.age < 18) {
    throw new UserValidationError('Age must be at least 18', 'age');
  }

  // Проверяем email
  if (!user.email.includes('@')) {
    throw new UserValidationError('Invalid email format', 'email');
  }
}
