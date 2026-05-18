export function removeDuplicates(arr) {
  const unique = [];
  // Проходим по массиву и добавляем в unique только те элементы, которых там еще нет
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
