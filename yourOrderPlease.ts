export function order(sentence: string): string {
  // convert string into array
  // count the words
  // check every word if it has the 1 in it
  // if yes add it to a variable
  // increase the 1 by 1
  // check if every word if it has the 2 in it
  // ...
  // return sorted array as string

  const words = sentence.split(" ");
  let sortedWords: string[] = [];

  for (let i = 1; i <= words.length; i++) {
    const wordWithCurrentNumber = words
      .filter((word) => word.includes(i.toString()))
      .join("");
    sortedWords.push(wordWithCurrentNumber);
  }

  return sortedWords.join(" ");
}
