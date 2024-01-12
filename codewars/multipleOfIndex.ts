export function multipleOfIndex(nums: number[]): number[] {
  return nums.filter((num, i) => num % i === 0 || !num);
}
