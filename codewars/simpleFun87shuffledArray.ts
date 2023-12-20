export function shuffledArray(shuffled: number[]): number[] {
  // sum up all numbers of the input array
  // divide it by 2 to get the original sum
  // get the index of the sum in the shuffled array
  // remove the number with that index from the shuffled array
  // return the resulting array sorted

  const originalSum = shuffled.reduce((sum, num) => sum + num, 0) / 2;
  const sumIndex = shuffled.indexOf(originalSum);
  const originalNums = shuffled.filter((_, i) => i !== sumIndex);

  return originalNums.sort((a, b) => a - b);
}
