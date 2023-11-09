export function findAverage(nums: number[]): number {
  return nums[0] ? nums.reduce((sum, num) => sum + num, 0) / nums.length : 0;
}
