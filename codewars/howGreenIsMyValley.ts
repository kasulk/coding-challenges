export function makeValley(arr: number[]): number[] {
  // loop through the sorted input array
  // if the elements index is even, add it to (the end) a leftWing array
  // else add it to (the beginning of) a rightWing array
  // return the merged arrays

  const leftWing: number[] = [];
  const rightWing: number[] = [];

  [...arr]
    .sort((a, b) => b - a)
    .forEach((num, i) => {
      if (i % 2 === 0) leftWing.push(num);
      else rightWing.unshift(num);
    });

  return [...leftWing, ...rightWing];
}
