export function replaceNth(
  text: string,
  n: number,
  oldValue: string,
  newValue: string
): string {
  // loop through the input string
  // with every occurence of the oldValue, increase a counter by 1
  // if the counter is divisible by n
  /// replace it with the newValue
  // after the loop, return the new text as a string

  if (n <= 0) return text;

  let numOccur = 0;

  return text
    .split("")
    .map((char) => {
      if (char === oldValue) {
        return ++numOccur % n === 0 ? newValue : oldValue;
      }
      return char;
    })
    .join("");
}
