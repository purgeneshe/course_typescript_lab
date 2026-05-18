export function even_elements(arr) {
  const result = [];
  // Проходим по массиву и добавляем четные числа в новый массив
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
