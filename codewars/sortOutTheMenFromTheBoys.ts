export function menFromBoys(arr: number[]): number[] {
  // remove duplicates from input array
  // filter the odds and sort them
  // filter the evens and sort them
  // return both arrays spreaded into one array

  const singleNums = [...new Set(arr)];

  const sortedEvens = singleNums
    .filter((num) => num % 2 === 0)
    .sort((a, b) => a - b);

  const sortedOdds = singleNums
    .filter((num) => num % 2 !== 0)
    .sort((a, b) => b - a);

  return [...sortedEvens, ...sortedOdds];
}
