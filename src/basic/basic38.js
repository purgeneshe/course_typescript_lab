export function some(arr, callback) {
  // Проходим по массиву и возвращаем true, если хотя бы один элемент удовлетворяет условию
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return true;
    }
  }
  return false;
}


