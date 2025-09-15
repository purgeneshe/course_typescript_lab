/* 
	 Допишите функцию withRetry, которая пытается выполнить операцию несколько раз перед тем как сдаться.
*/

export async function withRetry<T>(
  operation: () => Promise<T>,
  maxAttempts: number = 3
): Promise<T> {
  let lastError: Error;
  // Ваш код здесь (8-10 строк)
  // Попытаться выполнить операцию maxAttempts раз
  // Если все попытки неудачны, бросить последнюю ошибку
  throw lastError;
}
