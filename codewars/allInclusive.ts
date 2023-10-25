export function containAllRots(str: string, arr: string[]): boolean {
  // loop through input string
  // if the string is included in arr
  /// move its first letter the the end, and check this new version
  // if its not included return false
  // after the loop, return true

  let rotatingStr = str;

  for (let letter of str) {
    if (arr.includes(rotatingStr)) {
      rotatingStr = rotatingStr.slice(1) + rotatingStr[0];
      continue;
    }
    return false;
  }
  return true;
}
