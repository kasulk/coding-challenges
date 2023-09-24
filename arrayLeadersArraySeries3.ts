export function arrayLeaders(numbers: number[]): number[] {
  // sum up all numbers of the input array
  // loop through input array, for each element
  /// subtract it from the remainingSum
  /// and check if its greater than the new remainingSum
  /// (and in case its 0, check explicitly if its > remainingSum)
  /// if yes, add it to an output array

  let remainingSum: number = numbers.reduce((sum, curr) => sum + curr, 0);

  return numbers.filter((num) => {
    remainingSum -= num;
    return num > remainingSum || (num === 0 && num > remainingSum);
  });
}
