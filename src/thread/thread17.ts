import { fetchUser, type User } from "./promises";

export async function fetchUserWithRetry(id: number, maxAttempts = 3): Promise<User> {
  let lastError: Error;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      // Пытаемся получить пользователя
      return await fetchUser(id);
    } catch (error) {
      // Сохраняем последнюю ошибку
      lastError = error instanceof Error ? error : new Error(String(error));
    }
  }

  // Если все попытки провалились - бросаем последнюю ошибку
  throw lastError!;
}
