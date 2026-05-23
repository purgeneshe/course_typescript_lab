export function parseJsonSafely(jsonString: string): any | null {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    // Логируем ошибку и возвращаем null при некорректном JSON
    console.error(error);
    return null;
  }
}
