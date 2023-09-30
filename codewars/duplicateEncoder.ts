export function duplicateEncode(str: string): string {
  // convert input string to all lower case array
  // loop through the array
  // filter each element from the original string/array
  // if the length of each resulting array is > 1, return ')', else '('

  const arr = str.toLowerCase().split("");

  return arr
    .map((character) =>
      arr.filter((char) => char === character).length > 1 ? ")" : "("
    )
    .join("");
}
