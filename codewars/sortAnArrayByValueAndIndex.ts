export function sortByValueAndIndex(nums: number[]): number[] {
  return nums
    .map((num, i) => [num, num * (i + 1)])
    .sort((a, b) => a[1] - b[1])
    .map((element) => element[0]);
}
