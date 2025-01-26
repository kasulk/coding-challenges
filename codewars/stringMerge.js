function stringMerge(str1, str2, letter) {
  const firstBeginning = str1.slice(0, str1.indexOf(letter));
  const secondEnding = str2.slice(str2.indexOf(letter));
  return firstBeginning + secondEnding;
}
