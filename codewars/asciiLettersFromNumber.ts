export function convert(numStr: string): string {
  // for  each char, store it in a variable
  // if its index is odd,
  // add the variable to an array
  // reset the variable
  // after the loop, convert every element

  let temp = "";
  const asciiCodes: number[] = [];

  for (let i = 0; i < numStr.length; i++) {
    temp += numStr[i];

    if (i % 2 !== 0) {
      asciiCodes.push(Number(temp));
      temp = "";
    }
  }

  return String.fromCharCode(...asciiCodes);
}
