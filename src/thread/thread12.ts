import { fetchUser, fetchUserData, fetchUserSettings } from "./promises";
import type { User } from "./thread07";

export async function getUserProfile(id: number): Promise<{
  user: User;
  data: User;
  settings: { theme: string };
}> {
  // Выполняем три запроса параллельно с помощью Promise.all
  const [user, data, settings] = await Promise.all([
    fetchUser(id),
    fetchUserData(id),
    fetchUserSettings(id),
  ]);

  return { user, data, settings };
}