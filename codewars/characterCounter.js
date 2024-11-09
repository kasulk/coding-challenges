function validateWord(str) {
  const charCounts = getCharCounts(str.toLowerCase());
  return Object.values(charCounts).every((num, _, nums) => num === nums[0]);
}

function getCharCounts(str) {
  const charCounts = {};

  for (const char of str) {
    if (!charCounts[char]) charCounts[char] = 0;
    charCounts[char]++;
  }

  return charCounts;
}
