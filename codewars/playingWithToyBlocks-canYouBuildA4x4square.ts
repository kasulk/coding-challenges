export function buildSquare(blocks: number[]): boolean {
  const [num1s, num2s, num3s, num4s] = getBlockCounts(blocks);

  const numRowsOf3sAnd1s = Math.min(num3s, num1s);
  let rest1s = num1s - numRowsOf3sAnd1s;

  const numRowsOf2s = Math.trunc(num2s / 2);
  const rest2s = num2s - numRowsOf2s * 2;

  const numRowsOf2sAnd1s = Math.min(rest2s, Math.trunc(rest1s / 2));
  rest1s = rest1s - numRowsOf2sAnd1s * 2;

  const numRowsOf1s = Math.trunc(rest1s / 4);

  const sumRows =
    num4s + numRowsOf3sAnd1s + numRowsOf2s + numRowsOf2sAnd1s + numRowsOf1s;

  return sumRows >= 4;
}

function getBlockCounts(blocks: number[]): number[] {
  return [1, 2, 3, 4].map(
    (num) => blocks.filter((blocksNum) => num === blocksNum).length
  );
}
