import { fetchUserSettings } from "./promises";

export async function getSafeUserSettings(id: number): Promise<{ theme: string }> {
  try {
    // Пытаемся получить настройки
    return await fetchUserSettings(id);
  } catch {
    // При ошибке возвращаем значения по умолчанию
    return { theme: "light" };
  }
}
