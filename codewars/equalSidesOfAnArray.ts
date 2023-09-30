export function findEvenIndex(arr: number[]): number {
  // create a leftSum variable
  // create a rightSum variable with the initial value of the sum of the array minus the first element
  // loop through array, for every element,
  // check if the leftSum equals the rightSum
  // if yes, return i
  // if not,
  /// add the current element to the leftSum
  /// subtract the next element from the rightSum
  // after the loop, return -1

  let leftSum: number = 0;
  let rightSum: number = arr.reduce((acc, curr) => acc + curr) - arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (leftSum === rightSum) return i;
    leftSum += arr[i];
    rightSum -= arr[i + 1];
  }
  return -1;
}
