export function median(nums: number[]): number {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const middle = Math.trunc(sortedNums.length / 2);

  if (sortedNums.length % 2 === 0) {
    return (sortedNums[middle] + sortedNums[middle - 1]) / 2;
  }

  return sortedNums[middle];
}
