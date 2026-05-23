export async function withRetry<T>(
  operation: () => Promise<T>,
  maxAttempts: number = 3
): Promise<T> {
  let lastError: Error = new Error('No attempts made');

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      // Пытаемся выполнить операцию
      return await operation();
    } catch (error) {
      // Сохраняем последнюю ошибку
      lastError = error instanceof Error ? error : new Error(String(error));
    }
  }

  // Если все попытки провалились - бросаем последнюю ошибку
  throw lastError;
}
