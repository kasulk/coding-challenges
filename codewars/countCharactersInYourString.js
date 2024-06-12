function count(str) {
  const charsCounts = {};

  for (let char of str) {
    if (!charsCounts[char]) charsCounts[char] = 0;
    charsCounts[char]++;
  }

  return charsCounts;
}
