export function grabscrab(anagram: string, dictionary: string[]): string[] {
  const sortedAnagram = [...anagram].sort().join("");

  return dictionary.reduce((possibleMeanings: string[], word) => {
    const sortedWord = [...word].sort().join("");

    if (sortedAnagram === sortedWord) return [...possibleMeanings, word];
    return possibleMeanings;
  }, []);
}
