export function find(arr, callback) {
  // Проходим по массиву и возвращаем первый подходящий элемент
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}


