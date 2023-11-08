export function foldArray(nums: number[], runs: number): number[] {
  // outer loop: loop runs times
  /// inner loop: loop through input array
  /// length/2-rounded-down times
  /// sum up the current and the i to last element
  /// add it to an results array
  // after the inner loop, if the length of the array to be folded is odd,
  // append the element in the middle to the resulting array
  // after the outer loop, return the result

  let numsFolded: number[] = [];
  let numsToBeFolded: number[] = nums.slice();

  for (let i = 1; i <= runs; i++) {
    numsFolded = [];
    const numsToBeSummedCount = Math.trunc(numsToBeFolded.length / 2);

    for (let j = 0; j < numsToBeSummedCount; j++) {
      const currNum = numsToBeFolded[j];
      const mirroredNum = numsToBeFolded[numsToBeFolded.length - 1 - j];

      numsFolded.push(currNum + mirroredNum);
    }

    if (numsToBeFolded.length % 2 !== 0)
      numsFolded.push(numsToBeFolded[numsToBeSummedCount]);

    numsToBeFolded = numsFolded;
  }

  return numsFolded;
}
