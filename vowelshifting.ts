export function vowelShift(text: string | null, n: number): string | null {
  // export function vowelShift(text: string | null, n: number): string {
  // loop through every letter of the input text
  // check if its a vowel or not
  // if yes, push it to an array
  // remove the n last vowels in the array and move them to the start
  // loop through every letter of the input text again
  // replace every vowel with the elements from the array

  // console.log(text);

  const vowels = ["a", "e", "i", "o", "u"];
  //   let vowelsInInputText: string[] | null = []
  let vowelsInInputText: string[] = [];

  ////   console.log(vowelsInInputText)

  if (text === null) return text;

  const characters: string[] = text.split("");
  //   const characters = text.split('')

  for (let character of characters) {
    if (vowels.includes(character)) {
      vowelsInInputText.push(character);
    }
  }
  // if (vowelsInInputText.length === 0 || n === 0) return text
  if (!vowelsInInputText || n === 0) return text;

  // let lastVowel = "";
  let lastVowel: string | undefined;

  for (let i = 0; i < n; i++) {
    // console.log(vowelsInInputText);
    lastVowel = vowelsInInputText.pop();
    // console.log(lastVowel);
    if (lastVowel !== undefined) {
      vowelsInInputText.unshift(lastVowel as string);
    }
    // console.log(vowelsInInputText);
  }

  let outputText: string[] = [];
  //   const filteredArray: string[] = characters.filter((item): item is string => item !== undefined);

  if (vowelsInInputText) {
    // if (!vowelsInInputText.includes("undefined")) {
    //     console.log(vowelsInInputText)
    console.log("-----------");
    outputText = characters.map((character) => {
      //       outputText = filteredArray.map((character) => {
      if (vowels.includes(character)) {
        // if (vowels.includes(character) && vowelsInInputText !== null) {
        //       if (vowels.includes(character) && vowelsInInputText !== undefined && vowelsInInputText !== null) {
        //         console.log(vowelsInInputText)
        return vowelsInInputText.shift();
      } else {
        return character;
      }
    });
    console.log(outputText.join(""));
  }

  return outputText.join("");
}
