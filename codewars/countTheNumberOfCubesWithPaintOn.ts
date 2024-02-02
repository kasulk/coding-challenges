export function countSquares(cuts: number): number {
  // 0: 1
  // 1: 2*4 = 8
  // 2: 3*9 = 27-1 = 26
  // 3: 4*16 = 64-(2*4) = 56
  // 4: 5*25 = 125-(3*9) = 98

  const numTotalCubes = (cuts + 1) * (cuts + 1) ** 2;
  const numInvisibleCubes = (cuts - 1) * (cuts - 1) ** 2;

  return cuts ? numTotalCubes - numInvisibleCubes : 1;
}
