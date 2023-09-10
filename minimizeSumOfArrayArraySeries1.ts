export function minSum(arr: number[]): number {
  // loop through sorted input array, for each element
  // multiply first and last element (shift/pop)
  // add the product to a sum variable
  // after the loop, return the value of the sum variable

  let sum = 0;

  arr.sort((a, b) => a - b);

  while (arr.length > 0) {
    const firstElement = arr.shift() ?? 0;
    const lastElement = arr.pop() ?? 0;
    sum += firstElement * lastElement;
  }

  return sum;
}
