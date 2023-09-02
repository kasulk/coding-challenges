export function solve(s: string) {
  // loop through input string
  // for every lower case letter, increase a counter by 1
  // loop through input string again
  // if lower case letter count is < s.length/2,
  // convert every letter in s to upper case, else to lower case
  // return result

  let lowerCaseCount = 0;

  for (let letter of s) {
    if (letter === letter.toLowerCase()) lowerCaseCount++;
  }

  return s
    .split("")
    .map((letter) =>
      lowerCaseCount < s.length / 2
        ? letter.toUpperCase()
        : letter.toLowerCase()
    )
    .join("");
}
