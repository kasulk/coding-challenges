export function number(array: string[]): string[] {
  // loop through input array, for every element
  // concatenate the index+1, a colon and a space before the element
  // return the resulting array

  return array.map((element, i) => i + 1 + ": " + element);
}
