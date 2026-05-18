export function matrixMultiplication(A, B) {
  const R_A = A.length;
  const C_A = A[0].length;
  const C_B = B[0].length;

  const result = [];

  // Внешний цикл по строкам матрицы A
  for (let i = 0; i < R_A; i++) {
    const row = [];
    // Средний цикл по столбцам матрицы B
    for (let j = 0; j < C_B; j++) {
      let sum = 0;
      // Внутренний цикл по элементам строки A и столбца B
      for (let k = 0; k < C_A; k++) {
        sum += A[i][k] * B[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }

  return result;
}
