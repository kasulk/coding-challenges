export function isAllPossibilities(nums: number[]): boolean {
  const sortedNumsStr = [...nums].sort().toString();

  return nums.length
    ? Array(nums.length)
        .fill(0)
        .map((_, i) => i)
        .toString() === sortedNumsStr
    : false;
}
