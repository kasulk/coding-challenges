export function camelCase(str: string): string {
  // turn input string into array
  // for every word
  // turn the first letter into upper case
  // concatenate the rest of the word in lower case to the first letter
  // return result

  if (!str) return "";

  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join("");
}
