export class ValidationError extends Error {
	field: string;
	constructor(message: string, field: string) {
		super(message);
		this.name = 'ValidationError';
		this.field = field;
	}
}

export function validateUserAge(age: number): void {
	// Если возраст меньше 18, выбрасываем кастомную ошибку с полем age
	if (age < 18) {
		throw new ValidationError("Age must be at least 18", "age");
	}
}