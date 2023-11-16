export function productArray(nums: number[]): number[] {
  const numsProduct = nums.reduce((prod, num) => prod * num, 1);
  return nums.map((num) => numsProduct / num);
}
