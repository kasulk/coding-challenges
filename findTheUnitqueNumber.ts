export function findUniq(arr: number[]): number {
  // if the first 2 numbers are the same
  /// create array of a new Set
  /// return the second element of the new Set
  // if the first 2 numbers are not the same,
  /// create array of a new Set of only the first 3 elements
  /// return the element that is not equal to the original third one

  if (arr[0] === arr[1]) {
    return Array.from(new Set(arr))[1];
  } else {
    return Array.from(new Set([arr[0], arr[1], arr[2]])).filter(
      (element) => element !== arr[2]
    )[0];
  }
}
