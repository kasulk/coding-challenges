export function sortMyString(s: string): string {
  // loop through input string
  // add the letters with even indeces to the first element of an array,
  /// the odd ones to the second element
  // after the loop, return both elements joined with a space between them

  const seperatedStrings: [string, string] = ["", ""];

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      seperatedStrings[0] += s[i];
      continue;
    }
    seperatedStrings[1] += s[i];
  }

  return seperatedStrings.join(" ");
}
