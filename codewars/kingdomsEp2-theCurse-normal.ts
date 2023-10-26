export function translate(speech: string, vocabulary: string[]): string {
  // as long as there is an asterisk in speech
  // loop over the words from speech
  // if the word from speech possibly fits more than 1 words from vocabulary
  // skip it (for now)

  let speechFragments = speech.split(/([\s?!,.])/);

  const translation: string[] = [];
  let possibleTranslations: string[] = [];

  while (speechFragments.join("").includes("*")) {
    // console.log(speechFragments);

    for (let fragment of speechFragments) {
      if (fragment.length < 3) continue;
      if (!fragment.includes("*")) continue;

      vocabulary.forEach((word) => {
        if (wordsMatch(fragment, word)) possibleTranslations.push(word);
      });

      if (possibleTranslations.length === 1) {
        speechFragments = speechFragments.map((element) =>
          element.replace(fragment, possibleTranslations[0])
        );
        vocabulary = vocabulary.filter(
          (word) => word !== possibleTranslations[0]
        );
      }

      possibleTranslations = [];
    }
  }

  return speechFragments.join("");
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

translate("a**? *c*. **e,", ["ace", "acd", "abd"]);
