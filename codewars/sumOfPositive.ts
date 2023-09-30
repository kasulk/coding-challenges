export function positiveSum(arr: number[]): number {
  return arr.reduce((sum, curr) => (curr > 0 ? sum + curr : sum), 0);
}
