export const mix = (s1: string, s2: string): string => {
  // remove everything that is not a lower case letter from the input arrays
  // sort the resulting arrays
  // create a constructor function,
  // that has an id and the letters a-z as keys and 0 as values
  // create an instance for each array
  // loop through each array
  //
  // for each letter in the array, increase its corresponding value in its object by 1
  // after the loop
  // loop through 1 of the objects
  // check which value of the current letter key is higher,
  // add this value (repeated) with the id of the object to an array
  // if the values are equal, add a '=' instead of the object id
  // return this array joined with '/' as a string

  console.log(s1);
  console.log(s2);

  let output: string[] = [];

  const sortedLowerCaseLettersOfS1 = s1.match(/[a-z]/g)?.sort();
  const sortedLowerCaseLettersOfS2 = s2.match(/[a-z]/g)?.sort();

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let lettersInS1: { [key: string]: number } = {};
  let lettersInS2: { [key: string]: number } = {};

  for (let letter of alphabet) {
    lettersInS1[letter] = 0;
    lettersInS2[letter] = 0;
  }

  sortedLowerCaseLettersOfS1?.forEach((letter) => lettersInS1[letter]++);
  sortedLowerCaseLettersOfS2?.forEach((letter) => lettersInS2[letter]++);

  //   console.log(lettersInS1);
  //   console.log(lettersInS2);

  for (let key in lettersInS1) {
    if (lettersInS1[key] > lettersInS2[key]) {
      if (lettersInS1[key] <= 1) continue;
      output.push("1:" + key.repeat(lettersInS1[key]));
      continue;
    }
    if (lettersInS1[key] < lettersInS2[key]) {
      if (lettersInS2[key] <= 1) continue;
      output.push("2:" + key.repeat(lettersInS2[key]));
      continue;
    }
    if (lettersInS1[key] === lettersInS2[key]) {
      if (lettersInS1[key] <= 1) continue;
      output.push("=:" + key.repeat(lettersInS1[key]));
    }
  }

  console.log(output);
  console.log(output.join("/"));
  return output.join("/");
};

// mix("babalblubralf", "schnuppelpups");
// mix("aaa bbbb ccccc", "aaaaa bbbb ccc");
