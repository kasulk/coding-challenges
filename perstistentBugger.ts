export function persistence(num: number): number {
  // create a counter variable
  // turn input into string, then into an array of numbers
  // while the length of the array is > 1
  // multiply every digit with the next one
  // convert result into number[] again
  // store the result in the original array container
  // increase counter by 1
  // after the while loop, return the value of the counter

  let numberOfTurns = 0;
  let arr: number[] = num.toString().split("").map(Number);

  while (arr.length > 1) {
    arr = arr
      .reduce((a, b) => a * b)
      .toString()
      .split("")
      .map(Number);
    numberOfTurns++;
  }

  return numberOfTurns;
}
