export function zeroRowColumn(matrix, row, col) {
  const R = matrix.length;
  if (R === 0) return matrix;
  const C = matrix[0].length;

  // Зануляем всю строку с индексом row
  for (let c = 0; c < C; c++) {
    matrix[row][c] = 0;
  }

  // Зануляем весь столбец с индексом col
  for (let r = 0; r < R; r++) {
    matrix[r][col] = 0;
  }

  return matrix;
}
