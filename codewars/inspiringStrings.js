function longestWord(stringOfWords) {
  return stringOfWords
    .split(" ")
    .reduce((longest, curr) =>
      curr.length >= longest.length ? curr : longest
    );
}
