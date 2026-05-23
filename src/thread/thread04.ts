export async function fetchWithFallback(url: string): Promise<string> {
  try {
    // Выполняем запрос и возвращаем текст ответа при успехе
    const response = await fetch(url);
    return response.text();
  } catch (error) {
    // При ошибке возвращаем fallback-сообщение с описанием ошибки
    return `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}


