export function sumOfDifferences(nums: number[]): number {
  return [...nums]
    .sort((a, b) => b - a)
    .reduce(
      (sum, num, i, sortedNums) => sum + (num - sortedNums[i + 1] || 0),
      0
    );
}
