export function findLongestSubstring(string1, string2): string {
  // for each character in the input string1
  // check if it is included in input string2
  // if yes
  // add the next letter of string1 and check string2 again
  // if not

  // if the output array is empty or
  // if the length of the current substring is greater than
  // the length of an element in the output array
  /// clear the output array and assign it the current substring
  // else if
  /// the length of the current substring is equal to
  /// the length of an element in the output array
  /// add the current substring to the output array

  // repeat with the next character in string1
  // (after the length of the current)
  // return the output

  string1.toUpperCase();
  string2.toUpperCase();

  let output: string[] = [];

  for (let i = 0; i < string1.length; i++) {
    const currChar = string1[i];

    if (!string2.includes(currChar)) continue;

    let currSubstring = currChar;

    while (string2.includes(currSubstring)) {
      i++;
      const nextChar = string1[i];
      if (!nextChar) break;

      currSubstring += nextChar;
    }
    i--;

    if (!isVeryLastCharOfInputStr(string1, i))
      currSubstring = removeLastCharFromStr(currSubstring); // remove last checked letter

    if (isEmpty(output) || currSubstring.length > output[0].length)
      output = [currSubstring];
    else if (currSubstring.length === output[0].length)
      output.push(currSubstring);
  }

  return output.join(" ");
}

//
function removeLastCharFromStr(str: string): string {
  return str.slice(0, -1);
}

//
function isEmpty(arr: string[]): boolean {
  return !Boolean(arr.length);
}

//
function isVeryLastCharOfInputStr(str: string, index: number): boolean {
  return index === str.length - 1;
}
