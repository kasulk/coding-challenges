export function maxGap(nums: number[]): number {
  // sort the input array
  // for each number of the input array
  // subtract the next number from it
  // if the absolute value ist larger than the current max gap,
  // store it in a max variable
  // return the result

  return nums
    .sort((a, b) => a - b)
    .reduce((maxGap, curr, i, arr) => {
      const currentGap = Math.abs(curr - arr[i + 1]);
      return currentGap > maxGap ? currentGap : maxGap;
    }, 0);
}
