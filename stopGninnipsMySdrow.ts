export function spinWords(words: string): string {
  // TODO Have fun :)
  // turn string into arrays of words
  // check length of each word (loop)
  // if the length is > 5, reverse it
  // turn array back into string
  // return the string

  return words
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");
}
