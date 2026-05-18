export function isSymmetric(matrix) {
  const N = matrix.length;
  if (N === 0) return true;

  // Проверяем, что матрица квадратная
  for (let i = 0; i < N; i++) {
    if (matrix[i].length !== N) return false;
  }

  // Проверяем симметрию относительно главной диагонали
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (matrix[i][j] !== matrix[j][i]) {
        return false;
      }
    }
  }

  return true;
}

