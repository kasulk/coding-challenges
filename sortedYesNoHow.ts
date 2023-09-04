export function isSortedAndHow(array: number[]): string {
  // convert all arrays into strings to make them compareable
  // if the input array equals its sorted version, return 'yes, ascending'
  // if the input array equals the reversed sorted version, return 'yes, descending'
  // else return 'no'

  const sortedArray = [...array].sort((a, b) => a - b);
  const sortedArrayAsString = sortedArray.toString();
  const sortedArrayAsStringReversed = sortedArray.reverse().toString();
  const arrayAsString = array.toString();

  if (arrayAsString === sortedArrayAsString) return "yes, ascending";
  if (arrayAsString === sortedArrayAsStringReversed) return "yes, descending";

  return "no";
}
