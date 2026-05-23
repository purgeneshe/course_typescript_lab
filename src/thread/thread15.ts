import { fetchUser, fetchUserData, type User } from "./promises";

export function getFastestUserData(id: number): Promise<User> {
  // Используем Promise.race, чтобы вернуть результат первого завершившегося запроса
  return Promise.race([
    fetchUser(id),
    fetchUserData(id),
  ]);
}
