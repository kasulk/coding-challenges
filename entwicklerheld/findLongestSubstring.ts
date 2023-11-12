export function findLongestSubstring(string1, string2): string[] {
  // for each character in the input string1
  // check if it is included in input string2
  // if yes
  // add the next letter of string1 and check string2 again
  // if not
  // check the length of the first element in output array
  // if it it shorter than the current substring
  // overwrite the content of the output array with the current substring
  // if its length is equal to the current substring or if there is no element
  // add the current substring to the output array
  //? (if at some point the rest of string1
  //? is shorter than the already found longest substring,
  //? end the loop prematurely)
  // repeat with the next character (after the length of the current) in string1
  // return the output

  let output: string[] = [];

  for (let i = 0; i < string1.length; i++) {
    // if (string1.slice(i, string1.length) < output[0].length) break;

    const currChar = string1[i];

    if (!string2.includes(currChar)) continue;

    // if (string2.includes(currChar)) {
    let currSubstring = currChar;

    while (string2.includes(currSubstring)) {
      i++;
      if (!string1[i]) break;

      currSubstring += string1[i];
    }
    i--;
    currSubstring = currSubstring.slice(0, -1); // remove last checked letter
    //   console.log("curr", currSubstring);
    // }

    if (output[0] && output[0].length < currSubstring.length) {
      output = [currSubstring];
    } else if (!output[0] || output[0].length === currSubstring.length) {
      output.push(currSubstring);
    }
    // console.log("output", output);

    i += currSubstring.length - 1;
  }

  return output;
}

findLongestSubstring(
  "ADREICHINESENMITDEMKONTRABASSSASSENAUFDERSTRASSE",
  // 'ADREIAAPOPE',
  "PALIMPALIMDREIPOPEI"
);
