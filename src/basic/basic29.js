export function rotateArrayLeft(arr) {
  // Если массив пустой или содержит один элемент, возвращаем его без изменений
  if (arr.length <= 1) return arr;

  // Извлекаем первый элемент и вставляем его в конец
  const first = arr.shift();
  arr.push(first);

  return arr;
}
