export function strip_special_chars(text) {
  const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
  let result = '';
  // Оставляем только те символы, которые входят в строку разрешенных символов
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (allowed.includes(char)) {
      result += char;
    }
  }
  return result;
}
