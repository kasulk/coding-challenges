export function isAnagram(firstWord: string, secondWord: string): boolean {
  if (firstWord.length !== secondWord.length) return false;

  return [...firstWord].sort().toString() === [...secondWord].sort().toString();
}
