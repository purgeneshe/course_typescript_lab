export function factorial(n) {
  let result = 1;
  let i = 1;
  // Перемножаем все числа от 1 до n
  while (i <= n) {
    result *= i;
    i++;
  }
  return result;
}
