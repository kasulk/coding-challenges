export function maxTriSum(nums: number[]): number {
  // remove duplicates from input array
  // sort the array increasing
  // return the sum of the last 3 elements

  return [...new Set(nums)]
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((sum, num) => sum + num);
}
