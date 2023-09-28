export function pyramid(n: number): Array<Array<Number>> {
  // create an outer- and an inner array
  // loop n-times, for each iteration,
  // add a 1 to the inner array
  // add the inner array to the outer array
  // after the loop
  // return the output array

  let outerArray: number[][] = [];
  let innerArray: number[] = [];

  for (let i = 1; i <= n; i++) {
    innerArray = [...innerArray, 1];
    outerArray = [...outerArray, innerArray];
  }

  return outerArray;
}
