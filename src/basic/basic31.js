export function transposeMatrix(matrix) {
  const R = matrix.length;
  if (R === 0) return [];

  const C = matrix[0].length;
  if (C === 0) return [];

  const transposed = [];
  // Обходим каждый столбец исходной матрицы
  for (let c = 0; c < C; c++) {
    const row = [];
    // Обходим каждую строку для текущего столбца c
    for (let r = 0; r < R; r++) {
      row.push(matrix[r][c]);
    }
    transposed.push(row);
  }

  return transposed;
}
