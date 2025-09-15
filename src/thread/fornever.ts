import { Result, err, ok } from 'neverthrow'

export const parseNumber = (input: string): Result<number, string> => {
  const num = Number(input)
  return isNaN(num) ? err("Invalid number") : ok(num)
}
