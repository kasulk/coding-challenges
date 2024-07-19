export function gettingMad(nums: number[]): number {
  const sortedNums = nums.sort((a, b) => a - b);

  return sortedNums.reduce((minDiff, curr, i) => {
    const prev = sortedNums[i - 1];
    const currDiff = Math.abs(prev - curr);

    return currDiff < minDiff ? currDiff : minDiff;
  }, Infinity);
}
