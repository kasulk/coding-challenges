export function incrementer(nums: number[]): number[] {
  // loop through input array
  // add i + 1 and apply modulo 10 to each number
  // return the resulting array

  return nums.map((num, i) => (num + i + 1) % 10);
}
