export function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;
  let i = 2;

  // Вычисляем n-ое число Фибоначчи
  while (i <= n) {
    const next = prev + curr;
    prev = curr;
    curr = next;
    i++;
  }

  return curr;
}
