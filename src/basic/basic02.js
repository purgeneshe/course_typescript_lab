export function longerString(a, b) {
  // Возвращаем строку b, если её длина строго больше длины a, иначе возвращаем a.
  return b.length > a.length ? b : a;
}
