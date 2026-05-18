export function sum_positive(arr) {
  let sum = 0;
  // Проходим по массиву и суммируем только положительные числа
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

