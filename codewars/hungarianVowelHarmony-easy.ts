export function dative(word: string): string | undefined {
  const frontVowels = "eéiíöőüű";
  const backVowels = "aáoóuú";
  const vowels = [...frontVowels, ...backVowels];

  const lastVowel = word
    .split("")
    .reverse()
    .find((char) => vowels.includes(char));

  if (!lastVowel) return lastVowel;

  return frontVowels.includes(lastVowel) ? word + "nek" : word + "nak";
}
