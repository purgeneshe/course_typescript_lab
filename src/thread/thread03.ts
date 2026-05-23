export function getArrayElement<T>(array: T[], index: number): T | undefined {
  // Проверяем, что индекс в допустимых границах
  if (index < 0 || index >= array.length) {
    return undefined;
  }
  return array[index];
}
