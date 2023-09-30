export function dirReduc(arr: string[]): string[] {
  // while arr.inludes n and s or e and w
  // and the length of the array is not the same as it was in the last loop
  /// loop through elements
  /// - if there is a needless pair, remove it
  // after the loop, return the array

  let lastArrLength = 0;

  while (
    arr.length !== lastArrLength &&
    ((arr.includes("NORTH") && arr.includes("SOUTH")) ||
      (arr.includes("WEST") && arr.includes("EAST")))
  ) {
    lastArrLength = arr.length;

    for (let i = 0; i < arr.length; i++) {
      if (
        (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
        (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
        (arr[i] === "WEST" && arr[i + 1] === "EAST") ||
        (arr[i] === "EAST" && arr[i + 1] === "WEST")
      ) {
        arr.splice(i, 2);
      }
    }
  }
  return arr;
}
