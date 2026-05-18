export function filter(arr, f) {
  const result = [];
  // Обходим массив в цикле и добавляем элементы, удовлетворяющие условию f
  for (let i = 0; i < arr.length; i++) {
    if (f(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}



