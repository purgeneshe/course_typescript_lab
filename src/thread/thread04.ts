/* 
	Допишите функцию асинхронного запроса, чтобы она обрабатывала ошибки и возвращала fallback-значение.
*/

export async function fetchWithFallback(url: string): Promise<string> {
  // Ваш код здесь (4-5 строк)
  const response = await fetch(url);
  return response.text();
}


