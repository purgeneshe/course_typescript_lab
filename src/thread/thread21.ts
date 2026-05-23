import { Result, ok, err } from 'neverthrow'
import { parseNumber } from './thread20'

export const parsePositiveNumber = (input: string): Result<number, string> => {
  return parseNumber(input).andThen((num) => {
    // Если число положительное - возвращаем ok, иначе err
    if (num > 0) {
      return ok(num)
    }
    return err("Number must be positive")
  })
}

