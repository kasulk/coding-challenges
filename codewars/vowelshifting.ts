export function vowelShift(text: string | null, n: number): string | null {
  // loop through string
  // save each vowel in an array
  // if n > 0, pop vowel array and unshift back n times
  // if n < 0, shift vowel array and push back Math.abs(n) times
  // loop through input string array again
  // replace every vowel with the first vowel in the vowel array

  if (!text || !n) return text;

  const vowels = new RegExp(/[aeiouAEIOU]/);
  const vowelsOfText: string[] = [];

  // collect vowels
  for (let character of text) {
    if (vowels.test(character)) {
      vowelsOfText.push(character);
    }
  }

  if (!vowelsOfText.length) return text;

  // shift vowels
  if (n < 0) {
    for (let i = 0; i < Math.abs(n); i++) {
      vowelsOfText.push(vowelsOfText.shift() as string);
    }
  }
  if (n > 0) {
    for (let i = 0; i < Math.abs(n); i++) {
      vowelsOfText.unshift(vowelsOfText.pop() as string);
    }
  }

  // replace vowels in text with shifted vowels
  return text
    .split("")
    .map((character) =>
      vowels.test(character) ? (vowelsOfText.shift() as string) : character
    )
    .join("");
}
