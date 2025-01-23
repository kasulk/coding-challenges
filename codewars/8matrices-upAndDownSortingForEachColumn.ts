export function upDownColSort(matrix: number[][]): number[][] {
  const sortedNums = matrix.flat().sort((a, b) => a - b);
  const sortedMatrix = createMatrixFromNums(sortedNums, matrix.length);
  const sortedMatrixWithReversedRows = reverseOddIndexedRows(sortedMatrix);
  return rowsToCols(sortedMatrixWithReversedRows);
}

function createMatrixFromNums(nums: number[], rowLen: number): number[][] {
  const matrix: number[][] = [];
  let row: number[] = [];

  nums.forEach((num) => {
    row.push(num);
    if (row.length === rowLen) {
      matrix.push(row);
      row = [];
    }
  });

  return matrix;
}

function reverseOddIndexedRows(matrix: number[][]) {
  return matrix.map((row, i) => (i % 2 === 0 ? row : row.reverse()));
}

function rowsToCols(matrix: number[][]): number[][] {
  const numRows = matrix[0].length;
  const output = Array.from({ length: numRows }, () => [] as number[]);

  matrix.forEach((row) => {
    row.forEach((num, j) => {
      output[j].push(num);
    });
  });

  return output;
}
