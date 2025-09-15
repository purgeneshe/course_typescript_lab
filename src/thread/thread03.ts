/* 
	 Допишите функцию безопасного получения элемента массива, чтобы она возвращала undefined при выходе за границы.
*/

export function getArrayElement<T>(array: T[], index: number): T | undefined {
  // Ваш код здесь (3-4 строки)
  return array[index];
}
