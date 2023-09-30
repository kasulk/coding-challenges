export function transposeTwoStrings(arr: string[]): string {
  // find out length of longest string
  // loop through input array
  // for every element in the input array return the [i]'s' character
  // then do a line break
  // if there is no more character in a string, return ' '

  const maxStringLength = Math.max(arr[0].length, arr[1].length);
  let output = "";

  for (let i = 0; i < maxStringLength; i++) {
    let currentCharString1 = arr[0][i] ? arr[0][i] : " ";
    let currentCharString2 = arr[1][i] ? arr[1][i] : " ";

    output += currentCharString1 + " " + currentCharString2 + "\n";
  }
  output = output.substring(0, output.length - 1);

  return output;
}
