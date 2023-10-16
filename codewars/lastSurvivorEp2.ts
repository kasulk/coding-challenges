export function lastSurvivors(str: string): string {
  // create an object with the count of each letter of the alphabet
  // with each counter, initially set to 0
  // loop through the input string, for each letter
  // increase the corresponding counter in the object
  // if the current letter count is 2
  /// increase the next letter count by 1, and set the current to 0
  /// do this as long as the next letter count has increased to 2
  // after the loop, add each letter as often as its counter value to an output string
  // return this output string

  const alphabetPlus = "abcdefghijklmnopqrstuvwxyza";
  let result = "";

  // create an object with the count of each letter
  const lettersCounters: { [key: string]: number } = {};
  alphabetPlus.split("").forEach((letter) => (lettersCounters[letter] = 0));

  str.split("").forEach((letter) => {
    lettersCounters[letter]++;

    while (lettersCounters[letter] === 2) {
      const nextLetter = alphabetPlus[alphabetPlus.indexOf(letter) + 1];

      lettersCounters[nextLetter]++;
      lettersCounters[letter] = 0;

      letter = nextLetter;
    }
  });

  for (let letter in lettersCounters) {
    result += letter.repeat(lettersCounters[letter]);
  }

  return result;
}
