export function explode(s: string): string {
  // convert input string into array
  // loop through string numbers, for each string number
  // repeat it the number of times of its number value
  // concatenate it to an output string
  // after the loop, return the output string

  return s.split("").reduce((acc, curr) => acc + curr.repeat(Number(curr)), "");
}
