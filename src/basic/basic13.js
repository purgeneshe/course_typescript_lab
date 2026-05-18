export function average(arr) {
  if (arr.length === 0) return 0;

  let sum = 0;
  // Суммируем все элементы массива
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  // Возвращаем среднее арифметическое
  return sum / arr.length;
}
