/* 
	Допишите функцию создания даты с валидацией неверного формата. При неверном формате должно генерироваться исключение с сообщением "Invalid date format".
*/

export function createValidDate(dateString: string): Date {
  // Ваш код здесь (3-4 строки)
  const date = new Date(dateString);
  // Проверить на Invalid Date
  return date;
}
