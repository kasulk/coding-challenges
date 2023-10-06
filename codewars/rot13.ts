export function rot13(str: string): string {
  // create a variable with every lowercase letter of the alphabet
  // create a variable with every uppercase letter of the alphabet
  // loop through input string
  // if character is a letter,
  /// find its index in the alphabet,
  /// add 13 to the index
  /// find out the rest when divided by alphabet length
  /// return the letter of the alphabet with this resulting index
  // after the loop, return the result

  const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return str
    .split("")
    .map((char) => {
      let decipheredLetterIndex: number | null = null;

      if (/[a-z]/.test(char)) {
        decipheredLetterIndex =
          (lowerCaseAlphabet.indexOf(char) + 13) % lowerCaseAlphabet.length;
        return lowerCaseAlphabet.charAt(decipheredLetterIndex);
      }
      if (/[A-Z]/.test(char)) {
        decipheredLetterIndex =
          (upperCaseAlphabet.indexOf(char) + 13) % upperCaseAlphabet.length;
        return upperCaseAlphabet.charAt(decipheredLetterIndex);
      }
      return char;
    })
    .join("");
}
