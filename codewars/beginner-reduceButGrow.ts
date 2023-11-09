export function grow(nums: number[]): number {
  return nums.reduce((product, num) => product * num, 1);
}
