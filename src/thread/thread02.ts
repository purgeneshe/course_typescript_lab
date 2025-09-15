/* 
	Допишите функцию парсинга JSON, чтобы она возвращала null при некорректном JSON и логировала ошибку.
*/

export function parseJsonSafely(jsonString: string): any | null {
  // Ваш код здесь (3-5 строк)
  return JSON.parse(jsonString);
}
