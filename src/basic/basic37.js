export function map(arr, f) {
  const result = [];
  // Обходим массив и преобразуем каждый элемент с помощью функции f
  for (let i = 0; i < arr.length; i++) {
    result.push(f(arr[i]));
  }
  return result;
}

