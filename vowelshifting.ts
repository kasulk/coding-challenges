export function vowelShift(text: string | null, n: number): string | null {
  // loop through every letter of the input text
  // check if its a vowel or not
  // if yes, push it to an array
  // remove the n last vowels in the array and move them to the start
  // loop through every letter of the input text again
  // replace every vowel with the elements from the array

  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsInInputText: string[] | null = [];

  if (text === null) return null;

  const characters = text.split("");

  for (let character of characters) {
    if (vowels.includes(character)) {
      vowelsInInputText.push(character);
    }
  }
  //   if (vowelsInInputText.length === 0 || n === 0) return text
  if (!vowelsInInputText || n === 0) return text;

  let lastVowel = "";

  for (let i = 0; i < n; i++) {
    lastVowel = vowelsInInputText.pop() as string;
    vowelsInInputText.unshift(lastVowel);
  }

  //   for (let character of characters) {
  //     if (vowels.includes(character)) {
  //     }
  //   }

  let outputText: string[] = [];

  if (vowelsInInputText) {
    const outputText = characters.map((character) => {
      if (vowels.includes(character) && vowelsInInputText !== null) {
        return vowelsInInputText.shift();
      } else {
        return character;
      }
    });
  }

  return outputText.join("");
}
