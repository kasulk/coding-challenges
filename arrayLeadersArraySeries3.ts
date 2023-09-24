export function arrayLeaders(numbers: number[]): number[] {
  // sum up all numbers of the input array
  // loop through input array, for each element
  /// subtract it from the remainingSum
  /// and check if its greater than the new remainingSum
  /// if yes add it to an output array
  // after the loop, return the output array

  let remainingSum = numbers.reduce((sum, curr) => sum + curr);

  const output: number[] = numbers.filter((num) => {
    remainingSum -= num;
    if (num > remainingSum) return num;
  });

  return output;
}
