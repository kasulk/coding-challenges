export function playPass(str: string, num: number): string {
  // create a variable containing the alphabet
  // loop through characters of the input string
  // if the character is a letter
  /// get its index in the alphabet
  /// add num to it to get the index of the shifted letter
  /// apply modulo 26 to make the shift circularable
  /// depending on its index in the input string being even or odd,
  /// convert the current shifted letter to upper or lowercase
  // if the character is a number, subtract it from 9
  // in every other case move on to the next letter
  // return the reversed result as a string

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return str
    .split("")
    .map((char, i) => {
      if (/[a-z]/i.test(char)) {
        const charIndex = alphabet.indexOf(char.toLowerCase());
        const shiftedCharIndex = (charIndex + num) % 26;
        const shiftedChar = alphabet.charAt(shiftedCharIndex);

        if (i % 2 === 0) return shiftedChar.toUpperCase();

        return shiftedChar.toLowerCase();
      }

      if (/[0-9]/.test(char)) return 9 - Number(char);

      return char;
    })
    .reverse()
    .join("");
}
