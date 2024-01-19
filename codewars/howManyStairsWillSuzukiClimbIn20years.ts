export function stairsIn20(stairs: number[][]): number {
  return stairs.flat().reduce((sum, num) => sum + num, 0) * 20;
}
