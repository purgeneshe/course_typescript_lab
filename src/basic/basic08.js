export function sum_digits(num) {
  let sum = 0;
  let currentNum = num;
  while (currentNum > 0) {
    sum += currentNum % 10; // Прибавляем последнюю цифру
    currentNum = Math.floor(currentNum / 10); // Отбрасываем последнюю цифру
  }
  return sum;
}
