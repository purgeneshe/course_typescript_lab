export function diagonalSum(matrix) {
  let sum = 0;
  // Суммируем элементы главной диагонали, где индексы строки и столбца совпадают
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
  }
  return sum;
}
