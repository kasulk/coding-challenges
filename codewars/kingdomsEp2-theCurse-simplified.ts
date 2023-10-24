export function translate(speech: string, vocabulary: string[]): string {
  // split by space and/or ?!,. // ([\s?!,.]+)
  // for each word in speech
  // prefilter every word in vocabulary that has the same length
  // then compare each letter, except the asterisk
  // if the letters are the same, keep the word from the vocabulary
  // else check the next one
  // return the result

  const speechArr = speech.split(/([\s?!,.])/);
  // console.log(speechArr);
  // console.log(vocabulary);

  const output: string[] = [];

  speechArr.map((str) => {
    // console.log(str);
    if (str.length < 2) output.push(str);

    vocabulary.forEach((word) => {
      for (let i = 0; i < str.length; i++) {
        if (str.length !== word.length) break;
        if (i === str.length - 1 && str[i] === "*") output.push(word);
        if (str[i] === "*") continue;
        // console.log(str, str[i], word[i], output);

        if (str[i] !== word[i]) break;
        if (i === str.length - 1) output.push(word);
      }
    });
  });
  // console.log("---result:", output.join(""));
  return output.join("");
}

// translate("***lo w***d!", ["hello", "world"]);
// translate('***lo!', ["hello"])
// translate("hell*, w***d!", ["hello", "hell", "word", "world"]);
