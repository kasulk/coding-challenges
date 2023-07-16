export const pigIt = (sentence: string): string => {
  // create arr of the words
  // if element is not a letter, ignore it
  // save first letter in variable and delete it from start
  // concatenate it to the string
  // concatenate 'ay'

  return sentence
    .split(" ")
    .map((word) =>
      /[a-zA-Z]/.test(word) ? word.substring(1) + word[0] + "ay" : word
    )
    .join(" ");
};
