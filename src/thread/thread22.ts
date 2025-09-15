/* 
	Используйте Result.combine, чтобы обработать массив результатов и вернуть ошибку первой неудачи или массив успешных значений.
*/

import { Result } from 'neverthrow'
import { parseNumber } from './fornever'

export const processNumbers = (inputs: string[]): Result<number[], string> => {
	const results = inputs.map(parseNumber)
	// Ваш код здесь (3-5 строк)
}
