export function solve(str: string): number {
  // todo: return the highest value of consonant substrings
  //
  // create a variable with all letters
  // cut the inpunt string at every vowel, store the resulting substrings in an array
  // for each substring, sum up the indices of its letters in the alphabet +1
  // return the max of these sums

  const abc = "_abcdefghijklmnopqrstuvwxyz";

  const substrings = str.split(/[aeiou]/i);

  const consonantValues = substrings.map((str) =>
    str.split("").reduce((sum, letter) => sum + abc.indexOf(letter), 0)
  );

  return Math.max(...consonantValues);
}
