import { Result } from 'neverthrow'
import { parseNumber } from './fornever'

export const processNumbers = (inputs: string[]): Result<number[], string> => {
  const results = inputs.map(parseNumber)

  // Result.combine вернёт Ok с массивом значений или первую ошибку
  return Result.combine(results)
}
