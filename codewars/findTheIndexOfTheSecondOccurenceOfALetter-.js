function secondSymbol(str, char) {
  const indexOfFirst = str.indexOf(char);
  const indexOfSecond = str.indexOf(char, indexOfFirst + 1);
  return indexOfSecond;
}
