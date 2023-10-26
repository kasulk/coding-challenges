export function translate(speech: string, vocabulary: string[]): string {
  // as long as there is an asterisk in speech
  // loop over the words from speech
  // if the word from speech possibly fits more than 1 words from vocabulary
  // skip it (for now)

  const fragmentsOfSpeech = speech.split(/(\s?!,.)/);
  const translation: string[] = [];

  for (let fragmentOfSpeech of fragmentsOfSpeech) {
    // check if current fragment is a word
    if (fragmentOfSpeech.length < 3) {
      // maybe not neccessary
      translation.push(fragmentOfSpeech);
      continue;
    }

    if (!fragmentOfSpeech.includes("*")) continue;

    vocabulary.forEach((word) => {
      if (word.length === fragmentOfSpeech.length) {
        let possibleTranslationsCount = 0;
        const lettersOfVocabularyWord = word.split("");

        for (let i = 0; i < lettersOfVocabularyWord.length; i++) {
          const vocWordLetter = lettersOfVocabularyWord[i];
          const speechWordLetter = fragmentOfSpeech[i];

          // if letter is asterisk, skip current letter
          if (speechWordLetter === "*") continue;

          // if letters don't match, skip current word
          if (speechWordLetter !== vocWordLetter) break;

          if (speechWordLetter.length === i) possibleTranslationsCount++;
        }
        // if its the only possible translation, add it to the translation
        if ((possibleTranslationsCount = 1)) translation.push(word);

        // if there is more possiblities, check the next word first
      }
    });
    //
  }
}

function compareWords(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] === "*") continue;
    if (word1[i] !== word2[i]) return false;
  }

  return true;
}
