export function dontGiveMeFive(start: number, end: number): number {
  // loop through numbers from start to end
  // if the string version of the number contains a 5
  /// do nothing
  /// else, push it to an array
  // after the loop, return the length of the array

  const results: number[] = [];

  for (let i = start; i <= end; i++) {
    if (!i.toString().includes("5")) results.push(i);
  }

  return results.length;
}
