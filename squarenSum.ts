export function squareSum(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr * curr, 0);
}
