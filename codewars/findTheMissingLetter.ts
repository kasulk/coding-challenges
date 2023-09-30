export function findMissingLetter(array: string[]): string {
  // loop through the input array, for each element (except the last)
  // if the charcode of the next letter isn't greater 1
  /// return the character with charcode 1 greater than the current

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i].charCodeAt(0) + 1 !== array[i + 1].charCodeAt(0)) {
      return String.fromCharCode(array[i].charCodeAt(0) + 1);
    }
  }
  return "";
}
