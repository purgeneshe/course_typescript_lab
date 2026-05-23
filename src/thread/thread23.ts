import type { Result } from "neverthrow";
import { parseNumber } from "./fornever";

interface AppError {
  message: string;
  code: number;
}

export const parseNumberWithDetailedError = (input: string): Result<number, AppError> => {
  return parseNumber(input).mapErr((error) => ({
    // Преобразуем строку ошибки в объект AppError с кодом 400
    message: `Parse error: ${error}`,
    code: 400,
  }));
}
