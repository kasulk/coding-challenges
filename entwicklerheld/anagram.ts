export function isAnagram(firstWord, secondWord) {
  return [...firstWord].sort().toString() === [...secondWord].sort().toString();
}
