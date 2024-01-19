export function equalize(nums: number[]): string[] {
  return nums.map((num) => {
    const difference = (num - nums[0]).toString();

    if (difference.includes("-")) return difference;
    return `+${difference}`;
  });
}
