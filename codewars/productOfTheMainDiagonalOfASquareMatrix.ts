export function mainDiagonalProduct(matrix: number[][]): number {
  return matrix.reduce((prod, row, i) => prod * row[i], 1);
}
