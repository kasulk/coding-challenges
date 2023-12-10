export function wordPattern(word: string): string {
  // for each letter,
  // convert it to lowercase
  // if an foundChars array doesn't already contain it,
  // add the letter to this array
  // then return its index in the foundChars array
  // return the foundChars array as a dot seperated string

  const foundChars: string[] = [];

  return word
    .split("")
    .map((char) => {
      char = char.toLowerCase();
      if (!foundChars.includes(char)) foundChars.push(char);
      return foundChars.indexOf(char);
    })
    .join(".");
}
