import { fetchUser, fetchUserData, type User } from "./promises";

export async function getUserWithFallback(id: number): Promise<User> {
  try {
    // Сначала пытаемся получить пользователя
    return await fetchUser(id);
  } catch {
    // При ошибке fallback на данные пользователя
    return await fetchUserData(id);
  }
}
