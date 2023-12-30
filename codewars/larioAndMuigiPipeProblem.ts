export function pipeFix(nums: number[]): number[] {
  return Array(Number(nums.slice(-1)) - nums[0] + 1)
    .fill(0)
    .map((_, i) => nums[0] + i);
}
