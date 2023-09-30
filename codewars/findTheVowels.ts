export function vowelIndices(word: string): number[] {
  // loop through array
  // if current letter is included in vowels, push its index +1 to a result array
  // return the result

  const result: number[] = [];

  for (let i = 0; i < word.length; i++) {
    if ("aeiouyAEIOUY".includes(word[i])) result.push(i + 1);
  }

  return result;
}
