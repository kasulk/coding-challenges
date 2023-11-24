export function isNice(nums: number[]): boolean {
  // if the input array is empty, return false
  // for every number in the input array
  // if it does not include num+1 AND not num-1, return false
  // after the loop, return true

  if (!nums.length) return false;

  for (let num of nums) {
    if (!nums.includes(num + 1) && !nums.includes(num - 1)) return false;
  }

  return true;
}
