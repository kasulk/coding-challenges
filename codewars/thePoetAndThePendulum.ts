export function pendulum(nums: number[]): number[] {
  // loop through the sorted array
  // add the smallest number to the start of a leftArray
  // add the next number to the end of a rightArray
  // and the next to the start of the left array again, and so on...
  // after the loop, return the merged arrays

  const sortedNums = [...nums].sort((a, b) => a - b);
  const left: number[] = [];
  const right: number[] = [];

  sortedNums.forEach((num, i) => {
    if (i % 2 === 0) left.unshift(num);
    else right.push(num);
  });

  return [...left, ...right];
}
