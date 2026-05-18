export function concatenate_strings(arr) {
  let result = "";
  // Объединяем строки в цикле for
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
