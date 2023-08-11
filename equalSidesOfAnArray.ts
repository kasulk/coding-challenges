export function findEvenIndex(arr: number[]): number {
  // create a sum variable
  // loop through array
  // for every element,
  // check if the sum of the rest of the array equals the sum
  // if not, add the current element to the sum
  // if yes, return i
  // at the end return -1

  let leftSum: number = 0;
  let rightSum: number = arr.reduce((acc, curr) => acc + curr) - arr[0];
  console.log(arr);
  console.log(rightSum);

  for (let i = 0; i < arr.length; i++) {
    console.log(i, leftSum, rightSum);
    if (leftSum === rightSum) return i;
    leftSum += arr[i];
    rightSum -= arr[i + 1];
  }
  return -1;
}
