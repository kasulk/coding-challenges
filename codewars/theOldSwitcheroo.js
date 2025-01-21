function vowel2index(str) {
  return str.replace(/[aeiou]/gi, (_, i) => ++i);
}
