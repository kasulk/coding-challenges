export function divisibleBy(nums: number[], divisor: number): number[] {
  return nums.filter((num) => num % divisor === 0);
}
