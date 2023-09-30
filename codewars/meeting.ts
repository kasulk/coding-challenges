export function meeting(s: string): string {
  // convert input string into array (and remove the semicolons)
  // loop through array
  /// convert every element into upper case
  /// then into an array (remove colons)
  /// reverse inner arrays
  /// join the elements of the inner arrays with ', ' in between
  // sort the result
  // join the elements of the outer array with ')(' in between
  // return the string and add parentheses around it

  return `(${s
    .split(";")
    .map((name) => name.toUpperCase().split(":").reverse().join(", "))
    .sort()
    .join(")(")})`;
}
