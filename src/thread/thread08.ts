export function executeFunctionsSafely(functions: (() => any)[]): { result?: any; error?: string }[] {
  const results: { result?: any; error?: string }[] = [];

  for (const fn of functions) {
    try {
      // Выполняем функцию и сохраняем результат
      const result = fn();
      results.push({ result });
    } catch (error) {
      // При ошибке сохраняем сообщение ошибки
      results.push({ error: error instanceof Error ? error.message : String(error) });
    }
  }

  return results;
}
