export function nthSmallest(arr: number[], pos: number) {
  // sort input array
  // return element with index pos - 1

  return arr.sort((a, b) => a - b)[pos - 1];
}
