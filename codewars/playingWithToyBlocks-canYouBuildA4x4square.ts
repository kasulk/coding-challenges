export function buildSquare(blocks: number[]): boolean {
  let numRows = 0;
  const num4s = blocks.filter((num) => num === 4).length;
  const num3s = blocks.filter((num) => num === 3).length;
  const num2s = blocks.filter((num) => num === 2).length;
  const num1s = blocks.filter((num) => num === 1).length;

  const numRowsOf3sAnd1s = Math.min(num3s, num1s);
  let rest1s = num1s - numRowsOf3sAnd1s;

  const numRowsOf2s = Math.trunc(num2s / 2);
  const rest2s = num2s - numRowsOf2s * 2;

  let numRowsOf2sAnd1s = Math.min(rest2s, rest1s * 2);
  numRowsOf2sAnd1s = numRowsOf2sAnd1s >= 1 ? Math.trunc(numRowsOf2sAnd1s) : 0;

  rest1s = rest1s - numRowsOf2sAnd1s * 2;

  const numRowsOf1s = Math.trunc(rest1s / 4);
  numRows =
    num4s + numRowsOf3sAnd1s + numRowsOf2s + numRowsOf2sAnd1s + numRowsOf1s;

  return numRows >= 4;
}
