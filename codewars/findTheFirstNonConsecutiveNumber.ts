export function firstNonConsecutive(nums: number[]): null | number {
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const next = nums[i + 1];

    if (next !== curr + 1) return next;
  }

  return null;
}
