export function lastSurvivors(str: string): string {
  //// create a variable with all letters of the alphabet
  // create an array containing subarrays
  // every subarray has two elements
  // a letter of the alphabet and a counter, initially set to 0
  // loop through the input string, for each letter
  // increase the counter in the corresponding subarray by 1
  //
  // loop through the subarrays, for each subarray
  // divide the counter by 2, overwrite it with the remainder and round the result down
  // add the result to the next subarray
  // return a string with the remaining count of letters

  const alphabet = "abcdefghijklmnopqrstuvwxyza";

  // create an object with the count of each letter
  const lettersCounter: { [key: string]: number } = {};
  alphabet.split("").forEach((letter) => (lettersCounter[letter] = 0));

  str.split("").forEach((letter) => {
    const nextLetter = alphabet[alphabet.indexOf(letter) + 1];
    lettersCounter[letter]++;

    if (lettersCounter[letter] >= 2) {
      lettersCounter[nextLetter] =
        lettersCounter[nextLetter] + Math.trunc(lettersCounter[letter] / 2);

      lettersCounter[letter] = lettersCounter[letter] % 2;
    }
  });

  console.log(lettersCounter);

  let output = "";

  for (let key in lettersCounter) {
    output += key.repeat(lettersCounter[key]);
  }

  return output;
}
// lastSurvivors("aabz");
// lastSurvivors("abaa");
