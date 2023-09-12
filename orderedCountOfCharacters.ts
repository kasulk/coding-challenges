export function orderedCount(text: string): [string, number][] {
  // loop through input characters, for every character,
  // check if a tuple array with the current character as first element exists
  /// if yes, increase the second element by 1
  /// if not, create the array:
  /// with the current character as its first element and the second element as 1
  // after the loop, return the output array

  const output: [string, number][] = [];

  checkCharOfText: for (let char of text) {
    for (let i = 0; i < output.length; i++) {
      if (output[i][0] === char) {
        output[i][1]++;
        continue checkCharOfText;
      }
    }
    output.push([char, 1]);
  }

  return output;
}
