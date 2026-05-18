export function remove_duplicates(arr) {
  const unique = [];
  // обавляем в unique только те элементы, которых там ещё нет
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
