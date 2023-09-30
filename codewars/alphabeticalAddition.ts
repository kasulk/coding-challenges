export function addLetters(...letters: string[]): string {
  // if the input array is empty, early return 'z'
  // create a map string with all letters
  // for each letter of the input array,
  // convert it to its index in the map string + 1
  // add up the numbers and decrease it by 1
  // calculate the rest after division with 26
  // return the letter with the number/index in the map string

  if (!letters.length) return "z";

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letterSum =
    letters.reduce((acc, curr) => acc + alphabet.indexOf(curr) + 1, 0) - 1;

  return alphabet.charAt(letterSum % 26);
}
