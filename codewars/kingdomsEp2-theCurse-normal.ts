export function translate(speech: string, vocabulary: string[]): string {
  // as long as there is an asterisk in translation
  // loop over the fragments from speech
  // if the fragment from speech possibly fits more than 1 words from vocabulary
  // skip it (for now)
  // else replace it in translation, and remove the word from vocabulary

  let translation = speech;
  let fittingWords: string[] = [];

  while (translation.includes("*")) {
    const speechFragments = translation.split(/([\s?!,.])/);

    for (let fragment of speechFragments) {
      if (!fragment.includes("*") || fragment.length < 3) continue;

      vocabulary.forEach((word) => {
        if (wordsMatch(fragment, word)) fittingWords.push(word);
      });

      if (fittingWords.length === 1) {
        translation = translation.replace(fragment, fittingWords[0]);

        vocabulary = vocabulary.filter((word) => word !== fittingWords[0]);
      }

      fittingWords = [];
    }
  }

  return translation;
}

//
function wordsMatch(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] === "*") continue;
    if (word1[i] !== word2[i]) return false;
  }

  return true;
}
