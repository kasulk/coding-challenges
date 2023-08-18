export function high(str: string): string {
  // create a string variable with all letters of the alphabet as value
  // convert input string into an array
  // loop through the array
  // loop through every words letters
  // return the index of each letter in the alphabet +1, and
  // store it as first element in an array and the corresponding word as second element
  // sort the arrays by their first element descending
  // return the first word

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const words = str.split(" ");

  const numberedWords: [number, string][] = words
    .map((word): [number, string] => [
      word
        .split("")
        .map((letter) => alphabet.indexOf(letter) + 1)
        .reduce((acc, curr) => acc + curr),
      word,
    ])
    .sort((a, b) => Number(b[0]) - Number(a[0]));

  // type asserted, since all inputs are supposed to be valid
  return numberedWords.shift()![1];
}
