export function absentVowel(str: string) {
  // for each vowel
  // if it is not included in the input string
  // return its index

  const vowels = ["a", "e", "i", "o", "u"];

  return vowels.reduce(
    (result, vowel, i) => (str.includes(vowel) ? result : i),
    0
  );
}
