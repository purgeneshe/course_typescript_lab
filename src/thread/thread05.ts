export function createValidDate(dateString: string): Date {
  const date = new Date(dateString);

  // Если дата невалидна - выбрасываем исключение
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format");
  }

  return date;
}
