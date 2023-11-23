export function smaller(nums: number[]): number[] {
  // for each element of the input array
  // loop through the rest of the array
  /// if the element is smaller, increase a counter by 1
  /// add the value of the counter to the new array
  // after the loops, return the output array

  return nums.map((num, i) =>
    nums
      .slice(i + 1)
      .reduce(
        (smallerCount, curr) => (curr < num ? smallerCount + 1 : smallerCount),
        0
      )
  );
}
