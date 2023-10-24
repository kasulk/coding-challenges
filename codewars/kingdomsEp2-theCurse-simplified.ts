export function translate(speech: string, vocabulary: string[]): string {
  // split the speech by space and/or ?!,.
  // for each string in speech
  // if its not a word (but a space or punctuation), add it to the translation
  // for each word of vocabulary
  // if the word hasn't the same length as the string, skip it
  // else loop through each letter
  /// if its an asterisk
  /// and the last letter of the word, add the word to the translation
  /// if its an asterisk, but not the last letter, skip it
  /// if a letter doesn't match, go on with the next word
  /// if the last letter of a word is successfully reached,
  /// add the word to the translation
  // after the loops, return the joined translation

  const translation: string[] = [];

  speech.split(/([\s?!,.])/).forEach((str) => {
    if (str.length < 2) translation.push(str);

    vocabulary.forEach((word) => {
      //
      for (let i = 0; i < str.length; i++) {
        if (str.length !== word.length) break;

        const strChar = str[i];
        const wordLetter = word[i];

        if (strChar === "*") {
          if (i === str.length - 1) translation.push(word);
          continue;
        }

        if (strChar !== wordLetter) break;

        if (i === str.length - 1) translation.push(word);
      }
    });
  });

  return translation.join("");
}
