export function reverse_list(arr) {
  const result = [];
  // Заполняем новый массив, обходя исходный с конца к началу
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
