export function all(arr, callback) {
  // Проходим по массиву и возвращаем false, если хотя бы один элемент не удовлетворяет условию
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) {
      return false;
    }
  }
  return true;
}
