export function findLongestSubstring(string1, string2): string {
  // for each character in the shortStr
  // check if it is included in longStr
  // if yes
  // add the next letter of shortStr and check longStr again
  // if not

  // if the output array is empty or
  // if the length of the current substring is greater than
  // the length of an element in the output array
  /// clear the output array and assign it the current substring
  // else if
  /// the length of the current substring is equal to
  /// the length of an element in the output array
  /// add the current substring to the output array

  // repeat with the next character in shortStr
  // (after the length of the current)
  // return the output

  const [shortStr, longStr] = findShorterString(string1, string2);
  shortStr.toUpperCase();
  longStr.toUpperCase();

  let output: string[] = [];

  for (let i = 0; i < shortStr.length; i++) {
    const currChar = shortStr[i];

    if (!longStr.includes(currChar)) continue;

    let currSubstring = currChar;

    while (longStr.includes(currSubstring)) {
      i++;
      const nextChar = shortStr[i];
      if (!nextChar) break;

      currSubstring += nextChar;
    }
    i--;

    if (!isVeryLastCharOfInputStr(shortStr, i))
      currSubstring = removeLastCharFromStr(currSubstring); // remove last checked letter

    if (isEmpty(output) || currSubstring.length > output[0].length)
      output = [currSubstring];
    else if (currSubstring.length === output[0].length)
      output.push(currSubstring);
  }

  return output.join(" ");
}

//
function findShorterString(str1: string, str2: string): string[] {
  if (str1.length < str2.length) return [str1, str2];
  return [str2, str1];
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

findLongestSubstring(
  "CHECKITWHEREISTHELONGESTSUBSTRING24",
  "SUBSTINGWHERECHECKITANTCHECK24ISCHECKWHERE"
); // checkit
