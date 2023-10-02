export const encryptThis = (str: string): string => {
  // convert input string into an array of its words
  // loop through the array, for each word
  /// create a variable for the encrypted word, add to it
  /// the ASCII code of the first letter
  /// the last letter of the word
  /// the rest without the last letter
  /// the second letter
  // after the loop, convert the array to a string and return it

  return str
    .split(" ")
    .map((word) => {
      let encryptedWord = "";
      if (word) encryptedWord += word.charCodeAt(0);
      if (word.length > 1) encryptedWord += word[word.length - 1];
      if (word.length > 2) encryptedWord += word.slice(2, -1) + word[1];
      return encryptedWord;
    })
    .join(" ");
};
