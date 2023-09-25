export const mix = (s1: string, s2: string): string => {
  // create 2 objects that have the letters a-z as keys and 0 as values

  // remove everything that is not a lower case letter from the input arrays
  // sort the resulting arrays

  // for each letter in the array,
  /// increase its corresponding value in its object by 1

  // for each key in one of the objects
  /// check which value of the current letter key is higher,
  /// if its <= 1, discard it
  /// else, add an array with this value (repeated) and
  /// with the id of the object to an array
  /// if the values are equal, add a '=' instead of the object id

  // sort the labeledLetterStacks collection, first by length, then by their id
  // concat the inner arrays with ':'
  // return this array concated with '/' as a string

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const lettersInS1: { [key: string]: number } = {};
  const lettersInS2: { [key: string]: number } = {};

  for (let letter of alphabet) {
    lettersInS1[letter] = 0;
    lettersInS2[letter] = 0;
  }

  const sortedLowerCaseLettersOfS1 = s1.match(/[a-z]/g)?.sort();
  const sortedLowerCaseLettersOfS2 = s2.match(/[a-z]/g)?.sort();

  sortedLowerCaseLettersOfS1?.forEach((letter) => lettersInS1[letter]++);
  sortedLowerCaseLettersOfS2?.forEach((letter) => lettersInS2[letter]++);

  const labeledLetterStacks: string[][] = [];

  for (let key in lettersInS1) {
    if (lettersInS1[key] > lettersInS2[key]) {
      if (lettersInS1[key] <= 1) continue;
      labeledLetterStacks.push(["1", key.repeat(lettersInS1[key])]);
      continue;
    }
    if (lettersInS1[key] < lettersInS2[key]) {
      if (lettersInS2[key] <= 1) continue;
      labeledLetterStacks.push(["2", key.repeat(lettersInS2[key])]);
      continue;
    }
    if (lettersInS1[key] === lettersInS2[key]) {
      if (lettersInS1[key] <= 1) continue;
      labeledLetterStacks.push(["=", key.repeat(lettersInS1[key])]);
    }
  }

  return labeledLetterStacks
    .sort((a, b) => {
      if (a[1].length > b[1].length) return -1;
      if (a[1].length < b[1].length) return 1;
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
      return 0;
    })
    .map((innerArray) => innerArray.join(":"))
    .join("/");
};
