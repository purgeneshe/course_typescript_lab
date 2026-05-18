export function swap_first_last(arr) {
  if (arr.length <= 1) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i]);
    }
    return result;
  }

  const result = [];
  // Копируем исходный массив в новый
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }

  // Меняем местами первый и последний элементы
  const temp = result[0];
  result[0] = result[result.length - 1];
  result[result.length - 1] = temp;

  return result;
}
