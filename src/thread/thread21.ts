/* 
	Доделайте функцию, которая использует andThen для последовательной обработки: парсит число, затем проверяет, что оно положительное. Если число не положительное, то возвращает ошибку "Number must be positive".
*/

import { Result } from 'neverthrow'
import { parseNumber } from './thread20'

export const parsePositiveNumber = (input: string): Result<number, string> => {
  return parseNumber(input)
	// Ваш код здесь (3-5 строк)
}

