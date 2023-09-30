export function capitalize(s: string): [string, string] {
  // create 2 variables
  // loop through input string
  // for every even index
  // add the letter in upper case to variable1 and in lower case to variable2
  // do the opposite for the odd indeces
  // after the loop, return an array with both variables as elements

  let evenUpper = "";
  let oddUpper = "";

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      evenUpper += s[i].toUpperCase();
      oddUpper += s[i];
    } else {
      evenUpper += s[i];
      oddUpper += s[i].toUpperCase();
    }
  }

  return [evenUpper, oddUpper];
}
