export function safeDivide(a: number, b: number): number | null {
  // Если делитель равен нулю - возвращаем null вместо ошибки
  if (b === 0) {
    return null;
  }
  return a / b;
}
