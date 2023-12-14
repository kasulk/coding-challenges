export function decode(code: number[], key: number): string {
  // define the alphabet
  // from each number,
  // subtract the key digit with the index: index % key.length
  // from this,
  // subtract 1 to get the index of the letter in the alphabet variable

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const keyStr = key.toString();

  return code
    .map((num, i) => {
      const currKeyDigit = Number(keyStr[i % keyStr.length]);
      const alphabetIndex = num - currKeyDigit - 1;
      return alphabet[alphabetIndex];
    })
    .join("");
}
