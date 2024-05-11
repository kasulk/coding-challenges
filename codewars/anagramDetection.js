function isAnagram(word1, word2) {
  return toLowerCaseSorted(word1) === toLowerCaseSorted(word2);
}

function toLowerCaseSorted(str) {
  return str.toLowerCase().split("").sort().join("");
}
