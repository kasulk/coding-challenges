function evenChars(str) {
  if (str.length < 2 || str.length > 100) return "invalid string";

  return str
    .split("")
    .reduce((acc, char, i) => (i % 2 ? [...acc, char] : acc), []);
}
