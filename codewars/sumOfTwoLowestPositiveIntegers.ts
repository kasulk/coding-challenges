export function sumTwoSmallestNumbers(nums: number[]): number {
  const [first, second] = nums.slice().sort((a, b) => a - b);
  return first + second;
}
