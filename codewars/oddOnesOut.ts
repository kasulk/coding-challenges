export function oddOnesOut(nums: number[]): number[] {
  // for each number of the input array,
  // if no counter for the number exists, create one
  // else increase the value of the counter by 1
  // after the loop, only return all numbers from the array with even occurences

  const numCounts: { [key: number]: number } = {};

  nums.forEach((num) => {
    if (!numCounts[num]) numCounts[num] = 0;
    numCounts[num]++;
  });

  return nums.filter((num) => numCounts[num] % 2 === 0);
}
