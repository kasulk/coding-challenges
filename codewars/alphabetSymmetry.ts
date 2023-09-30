export function solve(inputArr: string[]): number[] {
  // create a map string
  // for each element in the input array transform it to lowercase
  // for each letter of a word increase a counter if its index equals the index in the map
  // push the value of a counter to the output array
  // return the output array

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const output: number[] = [];
  let count = 0;

  for (let string of inputArr) {
    for (let i = 0; i < string.length; i++) {
      if (string[i].toLowerCase() === alphabet[i]) {
        count++;
      }
    }
    output.push(count);
    count = 0;
  }
  return output;
}
