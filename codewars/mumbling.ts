export function accum(str: string): string {
  // turn input into array
  // map through array
  // return
  /// the current letter in upper case
  /// concatenate it i times in lower case
  // turn result back into string with '-' in between

  return str
    .split("")
    .map((letter, i) => letter.toUpperCase() + letter.toLowerCase().repeat(i))
    .join("-");
}
