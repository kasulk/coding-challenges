export function flattenAndSort(inputArray: number[][]): number[] {
  // flatten the input array
  // then return it sorted

  return inputArray.flat().sort((a, b) => a - b);
}
