import { fetchUser, fetchUserData, type User } from "./promises";

export async function getUserWithData(id: number): Promise<{ user: User; data: User }> {
  // Сначала получаем пользователя
  const user = await fetchUser(id);

  // Затем получаем его данные
  const data = await fetchUserData(id);

  return { user, data };
}