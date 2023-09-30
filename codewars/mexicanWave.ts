export function wave(str: string): Array<string> {
  // loop through every letter of the input string
  // if letter is whitespace, continue with next letter
  // else if
  // at index i, add letter to word variable in upper case
  // else add letter to word variable as is
  // after each word
  // add word variable to output array
  // reset word variable
  // at the end of the loops, return output

  if (!str) return [];

  const output: string[] = [];
  let word = "";

  // for every word
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;

    // for every letter
    for (let j = 0; j < str.length; j++) {
      if (j === i) {
        word += str[j].toUpperCase();
        continue;
      }
      word += str[j];
    }

    output.push(word);
    word = "";
  }

  return output;
}
