import { Result, err, ok } from 'neverthrow'

export const parseNumber = (input: string): Result<number, string> => {
  const num = Number(input)

  // Если результат NaN или строка пустая/пробельная - возвращаем ошибку
  if (isNaN(num) || input.trim() === '') {
    return err("Invalid number")
  }

  return ok(num)
}
