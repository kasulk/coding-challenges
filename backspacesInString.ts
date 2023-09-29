export function cleanString(s: string): string {
  // reverse input string
  // loop throup all chars
  // if the char is a #, increase #-count by 1 and remove the #
  // else, check the #-count
  /// if #-count is > 0, remove the char, and check next char
  /// else add the char (as first) to the output variable
  // return the output

  let backspaceCount = 0;
  let output = "";

  const reversedChars = s.split("").reverse();

  for (let char of reversedChars) {
    if (char === "#") {
      backspaceCount++;
      continue;
    }

    if (backspaceCount > 0) {
      backspaceCount--;
      continue;
    }

    output = char + output;
  }

  return output;
}
