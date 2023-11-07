export function encode(str: String, num: number): number[] {
  // create a variable containing the alphabet
  // for each letter in the input string
  /// replace it with its corresponding index in the alphabet
  /// add the digit from the input number
  /// due to probable overflow, determine the index with modulo num.length
  /// add 1 (off-by-one deviation)
  // return the result

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return str.split("").map((letter, i) => {
    const numStr = num.toString();
    return alphabet.indexOf(letter) + Number(numStr[i % numStr.length]) + 1;
  });
}
