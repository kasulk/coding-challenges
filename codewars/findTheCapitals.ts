export function capitals(word: string): number[] {
  // loop through array of characters
  // test for regular expression
  // push indexOf capital characters to output array

  let indicesOfCaps: number[] = [];

  word
    .split("")
    .forEach((char) =>
      /[A-Z]/.test(char) ? indicesOfCaps.push(word.indexOf(char)) : null
    );

  return indicesOfCaps;
}
